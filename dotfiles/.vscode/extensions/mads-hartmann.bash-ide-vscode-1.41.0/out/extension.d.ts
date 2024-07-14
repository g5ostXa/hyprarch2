import { ExtensionContext } from 'vscode';
export declare const CONFIGURATION_SECTION = "bashIde";
export declare function activate(context: ExtensionContext): Promise<void>;
export declare function deactivate(): Thenable<void> | undefined;
