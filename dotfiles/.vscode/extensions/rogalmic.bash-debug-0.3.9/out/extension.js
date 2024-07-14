"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const handlePath_1 = require("./handlePath");
const path_1 = require("path");
const which = require("npm-which");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.bash-debug.getProgramName', _config => {
        return vscode.window.showInputBox({
            placeHolder: "Type absolute path to bash script.",
            value: (process.platform === "win32") ? "{workspaceFolder}\\path\\to\\script.sh" : "{workspaceFolder}/path/to/script.sh"
        }).then(v => handlePath_1.expandPath(v, vscode.workspace.rootPath));
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.bash-debug.selectProgramName', _config => {
        return vscode.workspace.findFiles("**/*.sh", "").then((uris) => {
            const list = new Array();
            for (let i = 0; i < uris.length; i++) {
                list.push(uris[i].fsPath);
            }
            return vscode.window.showQuickPick(list).then((result) => {
                if (!result) {
                    return undefined;
                }
                return result;
            }).then(v => handlePath_1.expandPath(v, vscode.workspace.rootPath));
        });
    }));
    context.subscriptions.push(vscode.debug.registerDebugConfigurationProvider('bashdb', new BashConfigurationProvider()));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
class BashConfigurationProvider {
    resolveDebugConfiguration(folder, config, _token) {
        if (!config.type && !config.request && !config.name) {
            return undefined;
        }
        if (!config.type || !config.name) {
            let msg = "BUG in Bash Debug: reached to unreachable code.";
            msg += "\nIf it is reproducible, please report this bug on: https://github.com/rogalmic/vscode-bash-debug/issues";
            msg += "\nYou can avoid this bug by setting `type` and `name` attributes in launch.json.";
            return vscode.window.showErrorMessage(msg).then(_ => { return undefined; });
        }
        if (!config.request) {
            let msg = "Please set `request` attribute to `launch`.";
            return vscode.window.showErrorMessage(msg).then(_ => { return undefined; });
        }
        if (config.bashDbPath) {
            return vscode.window.showErrorMessage("`bashDbPath` is deprecated. Use `pathBashdb` instead.").then(_ => { return undefined; });
        }
        if (config.bashPath) {
            return vscode.window.showErrorMessage("`bashPath` is deprecated. Use `pathBash` instead.").then(_ => { return undefined; });
        }
        if (config.commandLineArguments) {
            return vscode.window.showErrorMessage("`commandLineArguments` is deprecated. Use `args` instead.").then(_ => { return undefined; });
        }
        if (config.scriptPath) {
            return vscode.window.showErrorMessage("`scriptPath` is deprecated. Use `program` instead.").then(_ => { return undefined; });
        }
        if (!config.program) {
            return vscode.window.showErrorMessage("Please specify `program` in launch.json.").then(_ => { return undefined; });
        }
        if (!config.args) {
            config.args = [];
        }
        else if (!Array.isArray(config.args)) {
            return vscode.window.showErrorMessage("Please specify `args` as array of strings in launch.json.").then(_ => { return undefined; });
        }
        if (!config.argsString) {
            config.argsString = "";
        }
        if (!config.env) {
            config.env = {};
        }
        if (!config.cwd) {
            if (!folder) {
                let msg = "Unable to determine workspace folder.";
                return vscode.window.showErrorMessage(msg).then(_ => { return undefined; });
            }
            config.cwd = folder.uri.fsPath;
        }
        if (!config.pathBash) {
            config.pathBash = "bash";
        }
        if (!config.pathBashdb) {
            if (process.platform === "win32") {
                config.pathBashdb = handlePath_1.getWSLPath(path_1.normalize(path_1.join(__dirname, "..", "bashdb_dir", "bashdb")));
            }
            else {
                config.pathBashdb = path_1.normalize(path_1.join(__dirname, "..", "bashdb_dir", "bashdb"));
            }
        }
        if (!config.pathBashdbLib) {
            if (process.platform === "win32") {
                config.pathBashdbLib = handlePath_1.getWSLPath(path_1.normalize(path_1.join(__dirname, "..", "bashdb_dir")));
            }
            else {
                config.pathBashdbLib = path_1.normalize(path_1.join(__dirname, "..", "bashdb_dir"));
            }
        }
        if (!config.pathCat) {
            config.pathCat = "cat";
        }
        if (!config.pathMkfifo) {
            config.pathMkfifo = "mkfifo";
        }
        if (!config.pathPkill) {
            if (process.platform === "darwin") {
                const pathPkill = which(__dirname).sync('pkill');
                if (pathPkill === "/usr/local/bin/pkill") {
                    vscode.window.showInformationMessage(`Using /usr/bin/pkill instead of /usr/local/bin/pkill`);
                    config.pathPkill = "/usr/bin/pkill";
                }
                else {
                    config.pathPkill = "pkill";
                }
            }
            else {
                config.pathPkill = "pkill";
            }
        }
        return config;
    }
}
//# sourceMappingURL=extension.js.map