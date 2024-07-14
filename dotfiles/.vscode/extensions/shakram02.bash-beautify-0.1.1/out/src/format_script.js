"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_promise_1 = require("child-process-promise");
const path_1 = require("path");
class FormatScript {
    format(fileContent, tabSize) {
        let scriptPath = path_1.join(__dirname, "beautify_bash.py");
        // Setup stdout events and parsing
        let promise = child_process_promise_1.spawn('python', [scriptPath, tabSize]);
        // Setup the python process
        this.formatter = promise.childProcess;
        this.formatter.stdout.on('data', (data) => this.data = data.toString());
        this.formatter.stderr.on('data', (data) => this.err = data.toString());
        // Send the text for formatting
        this.formatter.stdin.write(fileContent);
        this.formatter.stdin.end();
        return promise;
    }
}
exports.FormatScript = FormatScript;
//# sourceMappingURL=format_script.js.map