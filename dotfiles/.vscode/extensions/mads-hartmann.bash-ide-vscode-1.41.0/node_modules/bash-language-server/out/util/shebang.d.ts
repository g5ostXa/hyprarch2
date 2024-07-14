declare const BASH_DIALECTS: readonly ["sh", "bash", "dash", "ksh", "zsh", "csh", "ash"];
type BashDialect = (typeof BASH_DIALECTS)[number];
export declare function getShebang(fileContent: string): string | null;
export declare function getShellDialect(shebang: string): BashDialect | null;
export declare function getShellDialectFromShellDirective(fileContent: string): BashDialect | null;
export declare function analyzeShebang(fileContent: string): {
    shellDialect: BashDialect | null;
    shebang: string | null;
};
export {};
