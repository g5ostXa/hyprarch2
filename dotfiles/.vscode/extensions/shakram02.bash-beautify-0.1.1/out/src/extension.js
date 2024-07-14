'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const shell_formatter_1 = require("./shell_formatter");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    let disposable = vscode.languages.
        registerDocumentFormattingEditProvider('shellscript', new shell_formatter_1.ShellFormatter());
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map