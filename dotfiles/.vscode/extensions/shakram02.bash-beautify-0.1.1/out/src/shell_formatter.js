"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const format_script_1 = require("./format_script");
class ShellFormatter {
    constructor() {
        this.script = new format_script_1.FormatScript();
    }
    provideDocumentFormattingEdits(document, options, token) {
        // Retrieve all text in document
        let text = document.getText();
        this.document = document;
        if (text.length == 0) {
            return [];
        }
        // Get the tabsize before each format attempt, to 
        // ensure using the updated value
        let config = vscode_1.workspace.getConfiguration('bashBeautify');
        let tabSize = config.tabSize;
        return this.script.format(text, tabSize).then(() => {
            // Alright, replace the document content with the formatted one
            return [vscode_1.TextEdit.replace(this.getFullDocRange(), this.script.data)];
        }, _ => {
            // Something went wrong
            vscode_1.window.showWarningMessage("Couldn't format the document:"
                + this.script.err);
        });
    }
    /**
     * Select all the document
     * @param doc Current Document
     */
    getFullDocRange() {
        return this.document.validateRange(new vscode_1.Range(new vscode_1.Position(0, 0), new vscode_1.Position(Number.MAX_VALUE, Number.MAX_VALUE)));
    }
}
exports.ShellFormatter = ShellFormatter;
//# sourceMappingURL=shell_formatter.js.map