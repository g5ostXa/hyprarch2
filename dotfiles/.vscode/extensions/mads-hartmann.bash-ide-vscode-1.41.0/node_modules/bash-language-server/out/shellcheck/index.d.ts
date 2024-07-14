import * as LSP from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
type LinterOptions = {
    executablePath: string;
    cwd?: string;
};
export type LintingResult = {
    diagnostics: LSP.Diagnostic[];
    codeActions: Record<string, LSP.CodeAction | undefined>;
};
export declare class Linter {
    private cwd;
    executablePath: string;
    private uriToDebouncedExecuteLint;
    private _canLint;
    constructor({ cwd, executablePath }: LinterOptions);
    get canLint(): boolean;
    lint(document: TextDocument, sourcePaths: string[], additionalShellCheckArguments?: string[]): Promise<LintingResult>;
    private executeLint;
    private runShellCheck;
}
export {};
