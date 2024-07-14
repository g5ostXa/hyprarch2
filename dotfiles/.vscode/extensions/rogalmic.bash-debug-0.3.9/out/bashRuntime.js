"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePath = void 0;
const spawnBash_1 = require("./spawnBash");
const fs = require("fs");
var validatePathResult;
(function (validatePathResult) {
    validatePathResult[validatePathResult["success"] = 0] = "success";
    validatePathResult[validatePathResult["notExistCwd"] = 1] = "notExistCwd";
    validatePathResult[validatePathResult["notFoundBash"] = 2] = "notFoundBash";
    validatePathResult[validatePathResult["notFoundBashdb"] = 3] = "notFoundBashdb";
    validatePathResult[validatePathResult["notFoundCat"] = 4] = "notFoundCat";
    validatePathResult[validatePathResult["notFoundMkfifo"] = 5] = "notFoundMkfifo";
    validatePathResult[validatePathResult["notFoundPkill"] = 6] = "notFoundPkill";
    validatePathResult[validatePathResult["timeout"] = 7] = "timeout";
    validatePathResult[validatePathResult["cannotChmod"] = 8] = "cannotChmod";
    validatePathResult[validatePathResult["unsupportedBashVersion"] = 9] = "unsupportedBashVersion";
    validatePathResult[validatePathResult["unknown"] = 10] = "unknown";
})(validatePathResult || (validatePathResult = {}));
function _validatePath(cwd, pathBash, pathBashdb, pathCat, pathMkfifo, pathPkill, spawnTimeout = 5000) {
    const vpr = validatePathResult;
    var chmod_bashdb = pathBashdb.indexOf("bashdb_dir") > 0;
    if (chmod_bashdb) {
        try {
            fs.accessSync(pathBashdb, fs.constants.X_OK);
            chmod_bashdb = false;
        }
        catch (err) {
        }
    }
    const proc = spawnBash_1.spawnBashScriptSync(((chmod_bashdb) ? `chmod +x "${pathBashdb}" || exit ${vpr.cannotChmod};` : ``) +
        `type "${pathBashdb}" || exit ${vpr.notFoundBashdb};` +
        `type "${pathCat}" || exit ${vpr.notFoundCat};` +
        `type "${pathMkfifo}" || exit ${vpr.notFoundMkfifo};` +
        `type "${pathPkill}" || exit ${vpr.notFoundPkill};` +
        `test -d "${cwd}" || exit ${vpr.notExistCwd};` +
        `[[ "$BASH_VERSION" == 4.* ]] || [[ "$BASH_VERSION" == 5.* ]] || exit ${vpr.unsupportedBashVersion};`, pathBash, spawnTimeout);
    if (proc.error !== undefined) {
        if (proc.error.code === "ENOENT") {
            return [vpr.notFoundBash, ""];
        }
        if (proc.error.code === "ETIMEDOUT") {
            return [vpr.timeout, ""];
        }
        return [vpr.unknown, ""];
    }
    const errorString = proc.stderr.toString();
    return [proc.status, errorString];
}
function validatePath(cwd, pathBash, pathBashdb, pathCat, pathMkfifo, pathPkill) {
    const rc = _validatePath(cwd, pathBash, pathBashdb, pathCat, pathMkfifo, pathPkill);
    const askReport = `If it is reproducible, please report it to https://github.com/rogalmic/vscode-bash-debug/issues.`;
    const stderrContent = `\n\n${rc["1"]}`;
    switch (rc["0"]) {
        case validatePathResult.success: {
            return ``;
        }
        case validatePathResult.notExistCwd: {
            return `Error: cwd (${cwd}) does not exist.` + stderrContent;
        }
        case validatePathResult.notFoundBash: {
            if (process.platform.toString() === "win32") {
                return `Error: WSL bash (mandatory on Windows) is not found. (pathBash: ${pathBash})` + stderrContent;
            }
            else {
                return `Error: bash not found. (pathBash: ${pathBash})` + stderrContent;
            }
        }
        case validatePathResult.notFoundBashdb: {
            return `Error: bashdb not found. (pathBashdb: ${pathBashdb})` + stderrContent;
        }
        case validatePathResult.notFoundCat: {
            return `Error: cat not found. (pathCat: ${pathCat})` + stderrContent;
        }
        case validatePathResult.notFoundMkfifo: {
            return `Error: mkfifo not found. (pathMkfifo: ${pathMkfifo})` + stderrContent;
        }
        case validatePathResult.notFoundPkill: {
            return `Error: pkill not found. (pathPkill: ${pathPkill})` + stderrContent;
        }
        case validatePathResult.timeout: {
            return `Error: BUG: timeout while validating environment. ` + askReport + stderrContent;
        }
        case validatePathResult.cannotChmod: {
            return `Error: Cannot chmod +x internal bashdb copy.` + stderrContent;
        }
        case validatePathResult.unsupportedBashVersion: {
            return `Error: Only bash versions 4.* or 5.* are supported.` + stderrContent;
        }
        case validatePathResult.unknown: {
            return `Error: BUG: unknown error ocurred while validating environment. ` + askReport + stderrContent;
        }
    }
    return `Error: BUG: reached to unreachable code while validating environment (code ${rc}). ` + askReport + stderrContent;
}
exports.validatePath = validatePath;
//# sourceMappingURL=bashRuntime.js.map