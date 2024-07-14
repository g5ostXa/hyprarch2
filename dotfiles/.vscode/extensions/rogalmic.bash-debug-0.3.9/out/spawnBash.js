"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnBashScriptSync = exports.spawnBashScript = void 0;
const child_process_1 = require("child_process");
const handlePath_1 = require("./handlePath");
function spawnBashScript(scriptCode, pathBash, outputHandler) {
    const currentShell = (process.platform === "win32") ? handlePath_1.getWSLLauncherPath(false) : pathBash;
    const optionalBashPathArgument = (currentShell !== pathBash) ? pathBash : "";
    let spawnedProcess = child_process_1.spawn(currentShell, [optionalBashPathArgument, "-c", scriptCode].filter(arg => arg !== ""), { stdio: ["pipe", "pipe", "pipe"], shell: false });
    if (outputHandler) {
        spawnedProcess.on("error", (error) => {
            outputHandler(`${error}`, `console`);
        });
        spawnedProcess.stderr.on("data", (data) => {
            outputHandler(`${data}`, `stderr`);
        });
        spawnedProcess.stdout.on("data", (data) => {
            outputHandler(`${data}`, `stdout`);
        });
    }
    return spawnedProcess;
}
exports.spawnBashScript = spawnBashScript;
function spawnBashScriptSync(scriptCode, pathBash, spawnTimeout) {
    const currentShell = (process.platform === "win32") ? handlePath_1.getWSLLauncherPath(false) : pathBash;
    const optionalBashPathArgument = (currentShell !== pathBash) ? pathBash : "";
    return child_process_1.spawnSync(currentShell, [optionalBashPathArgument, "-c", scriptCode].filter(arg => arg !== ""), { timeout: spawnTimeout, shell: false });
}
exports.spawnBashScriptSync = spawnBashScriptSync;
//# sourceMappingURL=spawnBash.js.map