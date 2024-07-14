"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BashDebugSession = void 0;
const vscode_debugadapter_1 = require("vscode-debugadapter");
const path_1 = require("path");
const fs = require("fs");
const bashRuntime_1 = require("./bashRuntime");
const handlePath_1 = require("./handlePath");
const eventSource_1 = require("./eventSource");
const spawnBash_1 = require("./spawnBash");
const shell_quote_1 = require("shell-quote");
class BashDebugSession extends vscode_debugadapter_1.LoggingDebugSession {
    constructor() {
        super("bash-debug.txt");
        this.currentBreakpointIds = new Map();
        this.proxyData = new Map();
        this.fullDebugOutput = [""];
        this.fullDebugOutputIndex = 0;
        this.debuggerExecutableBusy = false;
        this.debuggerExecutableClosing = false;
        this.outputEventSource = new eventSource_1.EventSource();
        this.debuggerProcessParentId = -1;
        this.setDebuggerLinesStartAt1(true);
        this.setDebuggerColumnsStartAt1(true);
    }
    initializeRequest(response, _args) {
        response.body = response.body || {};
        response.body.supportsConditionalBreakpoints = true;
        response.body.supportsConfigurationDoneRequest = false;
        response.body.supportsEvaluateForHovers = true;
        response.body.supportsStepBack = false;
        response.body.supportsSetVariable = false;
        this.sendResponse(response);
    }
    disconnectRequest(response, _args) {
        this.releaseDebugger();
        spawnBash_1.spawnBashScript(`${this.launchArgs.pathPkill} -KILL -P "${this.debuggerProcessParentId}"; ${this.launchArgs.pathPkill} -TERM -P "${this.proxyData["PROXYID"]}"`, this.launchArgs.pathBash, data => this.sendEvent(new vscode_debugadapter_1.OutputEvent(`${data}`, 'console')));
        this.proxyProcess.on("exit", () => {
            this.debuggerExecutableClosing = true;
            this.sendResponse(response);
        });
    }
    async launchRequest(response, args) {
        this.launchArgs = args;
        vscode_debugadapter_1.logger.setup(args.trace ? vscode_debugadapter_1.Logger.LogLevel.Verbose : vscode_debugadapter_1.Logger.LogLevel.Stop, false);
        if (process.platform === "win32") {
            args.cwdEffective = `${handlePath_1.getWSLPath(args.cwd)}`;
            args.programEffective = `${handlePath_1.getWSLPath(args.program)}`;
        }
        else {
            args.cwdEffective = args.cwd;
            args.programEffective = args.program;
        }
        const errorMessage = bashRuntime_1.validatePath(args.cwdEffective, args.pathBash, args.pathBashdb, args.pathCat, args.pathMkfifo, args.pathPkill);
        if (errorMessage !== "") {
            response.success = false;
            response.message = errorMessage;
            this.sendResponse(response);
            return;
        }
        const fifo_path = "/tmp/vscode-bash-debug-fifo-" + (Math.floor(Math.random() * 10000) + 10000);
        this.proxyProcess = spawnBash_1.spawnBashScript(`function cleanup()
		{
			exit_code=$?
			trap '' ERR SIGINT SIGTERM EXIT
			exec 4>&-
			rm "${fifo_path}_in"
			rm "${fifo_path}"
			exit $exit_code
		}
		echo "::PROXYID::$$" >&2
		trap 'cleanup' ERR SIGINT SIGTERM EXIT
		mkfifo "${fifo_path}"
		mkfifo "${fifo_path}_in"

		"${args.pathCat}" "${fifo_path}" &
		exec 4>"${fifo_path}"
		"${args.pathCat}" >"${fifo_path}_in"`
            .replace("\r", ""), this.launchArgs.pathBash, (data, category) => {
            if (args.showDebugOutput || category === "console") {
                this.sendEvent(new vscode_debugadapter_1.OutputEvent(`${data}`, category));
            }
        });
        this.proxyProcess.stdin.write(`examine Debug environment: bash_ver=$BASH_VERSION, bashdb_ver=$_Dbg_release, program=$0, args=$*\nprint "$PPID"\nhandle INT stop\nprint '${BashDebugSession.END_MARKER}'\n`);
        let envVars = Object.keys(this.launchArgs.env)
            .map(e => `export ${e}='${this.launchArgs.env[e]}';`)
            .reduce((prev, next) => prev + next, ``);
        const command = this.joinCommands(`${envVars}cd "${args.cwdEffective}"`, `while [[ ! -p "${fifo_path}" ]]; do sleep 0.25; done`, `"${args.pathBash}" "${args.pathBashdb}" --quiet --tty "${fifo_path}" --tty_in "${fifo_path}_in" --library "${args.pathBashdbLib}" -- "${args.programEffective}" ${shell_quote_1.quote(args.args)} ${args.argsString}`);
        if (this.launchArgs.terminalKind === "debugConsole" || this.launchArgs.terminalKind === undefined) {
            spawnBash_1.spawnBashScript(command, this.launchArgs.pathBash, (data, category) => this.sendEvent(new vscode_debugadapter_1.OutputEvent(`${data}`, category)));
        }
        else {
            const currentShell = (process.platform === "win32") ? handlePath_1.getWSLLauncherPath(true) : args.pathBash;
            const optionalBashPathArgument = (currentShell !== args.pathBash) ? args.pathBash : "";
            const termArgs = {
                kind: this.launchArgs.terminalKind,
                title: "Bash Debug Console",
                cwd: ".",
                args: [currentShell, optionalBashPathArgument, `-c`, command].filter(arg => arg !== ""),
            };
            this.runInTerminalRequest(termArgs, 10000, (response) => {
                if (!response.success) {
                    this.sendEvent(new vscode_debugadapter_1.OutputEvent(`${JSON.stringify(response)}`, 'console'));
                }
            });
        }
        await this.onDebuggerAvailable();
        this.processDebugTerminalOutput();
        this.launchRequestFinalize(response, args);
    }
    joinCommands(...cmd) {
        return cmd.join(`; `);
    }
    async launchRequestFinalize(response, _args) {
        while (await this.onNextDebuggerOutput()) {
            for (let i = 0; i < this.fullDebugOutput.length; i++) {
                if (this.fullDebugOutput[i] === BashDebugSession.END_MARKER) {
                    this.debuggerProcessParentId = parseInt(this.fullDebugOutput[i - 1]);
                    BashDebugSession.END_MARKER = `${this.debuggerProcessParentId}${BashDebugSession.END_MARKER}`;
                    this.sendResponse(response);
                    this.sendEvent(new vscode_debugadapter_1.OutputEvent(`Sending InitializedEvent`, 'telemetry'));
                    this.releaseDebugger();
                    this.sendEvent(new vscode_debugadapter_1.InitializedEvent());
                    return;
                }
            }
        }
    }
    async setBreakPointsRequest(response, args) {
        await this.onDebuggerAvailable();
        if (!args.source.path) {
            this.sendEvent(new vscode_debugadapter_1.OutputEvent("Error: setBreakPointsRequest(): args.source.path is undefined.", 'console'));
            return;
        }
        let sourcePath = (process.platform === "win32") ? handlePath_1.getWSLPath(args.source.path) : args.source.path;
        if (sourcePath !== undefined) {
            sourcePath = handlePath_1.escapeCharactersInBashdbArg(sourcePath);
        }
        let setBreakpointsCommand = ``;
        if (this.currentBreakpointIds[args.source.path] === undefined) {
            this.currentBreakpointIds[args.source.path] = [];
            setBreakpointsCommand += `load ${sourcePath}\n`;
        }
        setBreakpointsCommand += (this.currentBreakpointIds[args.source.path].length > 0)
            ? `print 'delete <${this.currentBreakpointIds[args.source.path].join(" ")}>'\ndelete ${this.currentBreakpointIds[args.source.path].join(" ")}\nyes\n`
            : ``;
        if (args.breakpoints) {
            args.breakpoints.forEach((b) => { setBreakpointsCommand += `print 'break <${sourcePath}:${b.line} ${b.condition ? b.condition : ""}> '\nbreak ${sourcePath}:${b.line} ${b.condition ? handlePath_1.escapeCharactersInBashdbArg(b.condition) : ""}\n`; });
        }
        if (this.launchArgs.showDebugOutput) {
            setBreakpointsCommand += `info files\ninfo breakpoints\n`;
        }
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`${setBreakpointsCommand}print '${BashDebugSession.END_MARKER}'\n`);
        this.setBreakPointsRequestFinalize(response, args, currentLine);
    }
    async setBreakPointsRequestFinalize(response, args, currentOutputLength) {
        if (!args.source.path) {
            this.sendEvent(new vscode_debugadapter_1.OutputEvent("Error: setBreakPointsRequestFinalize(): args.source.path is undefined.", 'console'));
            return;
        }
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                this.currentBreakpointIds[args.source.path] = [];
                const breakpoints = new Array();
                for (let i = currentOutputLength; i < this.fullDebugOutput.length - 2; i++) {
                    if (this.fullDebugOutput[i - 1].indexOf("break <") === 0 && this.fullDebugOutput[i - 1].indexOf("> ") > 0) {
                        const lineNodes = this.fullDebugOutput[i].split(" ");
                        const bp = new vscode_debugadapter_1.Breakpoint(true, this.convertDebuggerLineToClient(parseInt(lineNodes[lineNodes.length - 1].replace(".", ""))));
                        bp.id = parseInt(lineNodes[1]);
                        breakpoints.push(bp);
                        this.currentBreakpointIds[args.source.path].push(bp.id);
                    }
                }
                response.body = { breakpoints: breakpoints };
                this.releaseDebugger();
                this.sendResponse(response);
                return;
            }
        }
    }
    async threadsRequest(response) {
        response.body = { threads: [new vscode_debugadapter_1.Thread(BashDebugSession.THREAD_ID, "Bash thread")] };
        this.sendResponse(response);
    }
    async stackTraceRequest(response, args) {
        await this.onDebuggerAvailable();
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`print backtrace\nbacktrace\nprint '${BashDebugSession.END_MARKER}'\n`);
        this.stackTraceRequestFinalize(response, args, currentLine);
    }
    async stackTraceRequestFinalize(response, args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                const lastStackLineIndex = this.fullDebugOutput.length - 3;
                let frames = new Array();
                for (let i = currentOutputLength; i <= lastStackLineIndex; i++) {
                    const lineContent = this.fullDebugOutput[i];
                    const frameIndex = parseInt(lineContent.substr(2, 2));
                    const frameText = lineContent;
                    let frameSourcePath = lineContent.substr(lineContent.lastIndexOf("`") + 1, lineContent.lastIndexOf("'") - lineContent.lastIndexOf("`") - 1);
                    const frameLine = parseInt(lineContent.substr(lineContent.lastIndexOf(" ")));
                    if ((process.platform === "win32")) {
                        frameSourcePath = handlePath_1.reverseWSLPath(frameSourcePath);
                    }
                    frameSourcePath = path_1.isAbsolute(frameSourcePath) ? frameSourcePath : path_1.normalize(path_1.join(this.launchArgs.cwd, frameSourcePath));
                    frames.push(new vscode_debugadapter_1.StackFrame(frameIndex, frameText, fs.existsSync(frameSourcePath) ? new vscode_debugadapter_1.Source(path_1.basename(frameSourcePath), this.convertDebuggerPathToClient(frameSourcePath), undefined, undefined, 'bash-adapter-data') : undefined, this.convertDebuggerLineToClient(frameLine)));
                }
                if (frames.length > 0) {
                    this.sendEvent(new vscode_debugadapter_1.OutputEvent(`Execution breaks at '${frames[0].name}'\n`, 'telemetry'));
                }
                const totalFrames = this.fullDebugOutput.length - currentOutputLength - 1;
                const startFrame = typeof args.startFrame === 'number' ? args.startFrame : 0;
                const maxLevels = typeof args.levels === 'number' ? args.levels : 100;
                frames = frames.slice(startFrame, Math.min(startFrame + maxLevels, frames.length));
                response.body = { stackFrames: frames, totalFrames: totalFrames };
                this.releaseDebugger();
                this.sendResponse(response);
                return;
            }
        }
    }
    async scopesRequest(response, _args) {
        const scopes = [new vscode_debugadapter_1.Scope("Local", this.fullDebugOutputIndex, false)];
        response.body = { scopes: scopes };
        this.sendResponse(response);
    }
    async variablesRequest(response, args) {
        await this.onDebuggerAvailable();
        let getVariablesCommand = `info program\n`;
        const count = typeof args.count === 'number' ? args.count : 100;
        const start = typeof args.start === 'number' ? args.start : 0;
        let variableDefinitions = ["$PWD", "$? \\\# from '$_Dbg_last_bash_command'"];
        variableDefinitions = variableDefinitions.slice(start, Math.min(start + count, variableDefinitions.length));
        variableDefinitions.forEach((v) => { getVariablesCommand += `print 'examine <${v}> '\nexamine ${v}\n`; });
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`${getVariablesCommand}print '${BashDebugSession.END_MARKER}'\n`);
        this.variablesRequestFinalize(response, args, currentLine);
    }
    async variablesRequestFinalize(response, _args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                let variables = [];
                for (let i = currentOutputLength; i < this.fullDebugOutput.length - 2; i++) {
                    if (this.fullDebugOutput[i - 1].indexOf("examine <") === 0 && this.fullDebugOutput[i - 1].indexOf("> ") > 0) {
                        variables.push({
                            name: `${this.fullDebugOutput[i - 1].replace("examine <", "").replace("> ", "").split('#')[0]}`,
                            type: "string",
                            value: this.fullDebugOutput[i],
                            variablesReference: 0
                        });
                    }
                }
                response.body = { variables: variables };
                this.releaseDebugger();
                this.sendResponse(response);
                return;
            }
        }
    }
    async continueRequest(response, args) {
        await this.onDebuggerAvailable();
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`print continue\ncontinue\nprint '${BashDebugSession.END_MARKER}'\n`);
        this.continueRequestFinalize(response, args, currentLine);
        this.sendResponse(response);
    }
    async continueRequestFinalize(_response, _args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                this.releaseDebugger();
                return;
            }
        }
    }
    async nextRequest(response, args) {
        await this.onDebuggerAvailable();
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`print next\nnext\nprint '${BashDebugSession.END_MARKER}'\n`);
        this.nextRequestFinalize(response, args, currentLine);
        this.sendResponse(response);
    }
    async nextRequestFinalize(_response, _args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                this.releaseDebugger();
                return;
            }
        }
    }
    async stepInRequest(response, args) {
        await this.onDebuggerAvailable();
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`print step\nstep\nprint '${BashDebugSession.END_MARKER}'\n`);
        this.stepInRequestFinalize(response, args, currentLine);
        this.sendResponse(response);
    }
    async stepInRequestFinalize(_response, _args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                this.releaseDebugger();
                return;
            }
        }
    }
    async stepOutRequest(response, args) {
        await this.onDebuggerAvailable();
        const currentLine = this.fullDebugOutput.length;
        this.proxyProcess.stdin.write(`print finish\nfinish\nprint '${BashDebugSession.END_MARKER}'\n`);
        this.stepOutRequestFinalize(response, args, currentLine);
        this.sendResponse(response);
    }
    async stepOutRequestFinalize(_response, _args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                this.releaseDebugger();
                return;
            }
        }
    }
    async evaluateRequest(response, args) {
        await this.onDebuggerAvailable();
        const currentLine = this.fullDebugOutput.length;
        let expression = (args.context === "hover") ? `${args.expression.replace(/['"]+/g, "")}` : `${args.expression}`;
        expression = handlePath_1.escapeCharactersInBashdbArg(expression);
        this.proxyProcess.stdin.write(`print 'examine <${expression}>'\nexamine ${expression}\nprint '${BashDebugSession.END_MARKER}'\n`);
        this.evaluateRequestFinalize(response, args, currentLine);
    }
    async evaluateRequestFinalize(response, _args, currentOutputLength) {
        while (await this.onNextDebuggerOutput()) {
            if (this.promptReached(currentOutputLength)) {
                response.body = { result: `'${this.fullDebugOutput[currentOutputLength]}'`, variablesReference: 0 };
                this.releaseDebugger();
                this.sendResponse(response);
                return;
            }
        }
    }
    async pauseRequest(response, args) {
        if (args.threadId === BashDebugSession.THREAD_ID) {
            spawnBash_1.spawnBashScript(`${this.launchArgs.pathPkill} -INT -P ${this.debuggerProcessParentId} -f bashdb`, this.launchArgs.pathBash, data => this.sendEvent(new vscode_debugadapter_1.OutputEvent(`${data}`, 'console')))
                .on("exit", () => this.sendResponse(response));
            return;
        }
        response.success = false;
        this.sendResponse(response);
    }
    removePrompt(line) {
        if (line.indexOf("bashdb<") === 0) {
            return line.substr(line.indexOf("> ") + 2);
        }
        return line;
    }
    promptReached(currentOutputLength) {
        return this.fullDebugOutput.length > currentOutputLength && this.fullDebugOutput[this.fullDebugOutput.length - 2] === BashDebugSession.END_MARKER;
    }
    processDebugTerminalOutput() {
        this.proxyProcess.stdio[2].on('data', (data) => {
            const list = data.toString().split("\n");
            list.forEach(l => {
                let nodes = l.split("::");
                if (nodes.length === 3) {
                    this.proxyData[nodes[1]] = nodes[2];
                }
            });
        });
        this.outputEventSource.schedule(() => {
            for (; this.fullDebugOutputIndex < this.fullDebugOutput.length - 1; this.fullDebugOutputIndex++) {
                const line = this.fullDebugOutput[this.fullDebugOutputIndex];
                if (line.indexOf("(") === 0 && line.indexOf("):") === line.length - 2) {
                    this.sendEvent(new vscode_debugadapter_1.OutputEvent(`Sending StoppedEvent`, 'telemetry'));
                    this.sendEvent(new vscode_debugadapter_1.StoppedEvent("break", BashDebugSession.THREAD_ID));
                }
                else if (line.indexOf("Program received signal ") === 0) {
                    this.sendEvent(new vscode_debugadapter_1.OutputEvent(`Sending StoppedEvent`, 'telemetry'));
                    this.sendEvent(new vscode_debugadapter_1.StoppedEvent("break", BashDebugSession.THREAD_ID));
                }
                else if (line.indexOf("Debugged program terminated") === 0) {
                    this.proxyProcess.stdin.write(`\nq\n`);
                    this.sendEvent(new vscode_debugadapter_1.OutputEvent(`Sending TerminatedEvent`, 'telemetry'));
                    this.sendEvent(new vscode_debugadapter_1.TerminatedEvent());
                }
            }
        });
        this.proxyProcess.stdio[1].on('data', (data) => {
            const list = data.toString().split("\n", -1);
            const fullLine = `${this.fullDebugOutput.pop()}${list.shift()}`;
            this.fullDebugOutput.push(this.removePrompt(fullLine));
            list.forEach(l => this.fullDebugOutput.push(this.removePrompt(l)));
            this.outputEventSource.setEvent();
        });
    }
    async onDebuggerAvailable() {
        while (this.debuggerExecutableBusy) {
            await this.outputEventSource.onEvent();
        }
        this.debuggerExecutableBusy = true;
    }
    async onNextDebuggerOutput() {
        await this.outputEventSource.onEvent();
        return !this.debuggerExecutableClosing;
    }
    async releaseDebugger() {
        this.debuggerExecutableBusy = false;
        this.outputEventSource.setEvent();
    }
}
exports.BashDebugSession = BashDebugSession;
BashDebugSession.THREAD_ID = 42;
BashDebugSession.END_MARKER = "############################################################";
vscode_debugadapter_1.DebugSession.run(BashDebugSession);
//# sourceMappingURL=bashDebug.js.map