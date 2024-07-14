import * as LSP from 'vscode-languageserver';
import * as Parser from 'web-tree-sitter';
export type SourceCommand = {
    range: LSP.Range;
    uri: string | null;
    error: string | null;
};
/**
 * Analysis the given tree for source commands.
 */
export declare function getSourceCommands({ fileUri, rootPath, tree, }: {
    fileUri: string;
    rootPath: string | null;
    tree: Parser.Tree;
}): SourceCommand[];
