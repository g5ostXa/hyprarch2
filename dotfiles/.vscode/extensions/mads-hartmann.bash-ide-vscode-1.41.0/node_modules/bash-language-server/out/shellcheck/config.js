"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LEVEL_TO_SEVERITY = exports.CODE_TO_TAGS = exports.SUPPORTED_BASH_DIALECTS = void 0;
const LSP = require("vscode-languageserver/node");
exports.SUPPORTED_BASH_DIALECTS = ['sh', 'bash', 'dash', 'ksh'];
// https://github.com/koalaman/shellcheck/wiki
exports.CODE_TO_TAGS = {
    2034: [LSP.DiagnosticTag.Unnecessary],
};
// https://github.com/koalaman/shellcheck/blob/364c33395e2f2d5500307f01989f70241c247d5a/src/ShellCheck/Formatter/Format.hs#L50
exports.LEVEL_TO_SEVERITY = {
    error: LSP.DiagnosticSeverity.Error,
    warning: LSP.DiagnosticSeverity.Warning,
    info: LSP.DiagnosticSeverity.Information,
    style: LSP.DiagnosticSeverity.Hint,
};
//# sourceMappingURL=config.js.map