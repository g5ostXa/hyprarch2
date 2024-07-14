"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeCharactersInBashdbArg = exports.getWSLLauncherPath = exports.reverseWSLPath = exports.getWSLPath = exports.expandPath = void 0;
const path_1 = require("path");
function expandPath(path, rootPath) {
    if (!path) {
        return undefined;
    }
    if (rootPath) {
        path = path.replace("{workspaceFolder}", rootPath).split("\\").join("/");
    }
    return path;
}
exports.expandPath = expandPath;
function getWSLPath(path) {
    if (!path) {
        return undefined;
    }
    if (!path.startsWith("/")) {
        path = "/mnt/" + path.substr(0, 1).toLowerCase() + path.substr("X:".length).split("\\").join("/");
    }
    return path;
}
exports.getWSLPath = getWSLPath;
function reverseWSLPath(wslPath) {
    if (wslPath.startsWith("/mnt/")) {
        return wslPath.substr("/mnt/".length, 1).toUpperCase() + ":" + wslPath.substr("/mnt/".length + 1).split("/").join("\\");
    }
    return wslPath.split("/").join("\\");
}
exports.reverseWSLPath = reverseWSLPath;
function getWSLLauncherPath(useInShell) {
    if (useInShell) {
        return "wsl.exe";
    }
    return process.env.hasOwnProperty('PROCESSOR_ARCHITEW6432') ?
        path_1.join("C:", "Windows", "sysnative", "wsl.exe") :
        path_1.join("C:", "Windows", "System32", "wsl.exe");
}
exports.getWSLLauncherPath = getWSLLauncherPath;
function escapeCharactersInBashdbArg(path) {
    return path.replace(/\s/g, (m) => "\\\\" + ("0000" + m.charCodeAt(0).toString(8)).slice(-4));
}
exports.escapeCharactersInBashdbArg = escapeCharactersInBashdbArg;
//# sourceMappingURL=handlePath.js.map