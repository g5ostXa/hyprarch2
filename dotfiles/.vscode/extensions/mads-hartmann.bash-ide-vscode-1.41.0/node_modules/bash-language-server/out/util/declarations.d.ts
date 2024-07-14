import * as LSP from 'vscode-languageserver/node';
import * as Parser from 'web-tree-sitter';
export type GlobalDeclarations = {
    [word: string]: LSP.SymbolInformation;
};
export type Declarations = {
    [word: string]: LSP.SymbolInformation[];
};
/**
 * Returns declarations (functions or variables) from a given root node
 * that would be available after sourcing the file. This currently does
 * not include global variables defined inside if statements or functions
 * as we do not do any flow tracing.
 *
 * Will only return one declaration per symbol name – the latest definition.
 * This behavior is consistent with how Bash behaves, but differs between
 * LSP servers.
 *
 * Used when finding declarations for sourced files and to get declarations
 * for the entire workspace.
 */
export declare function getGlobalDeclarations({ tree, uri, }: {
    tree: Parser.Tree;
    uri: string;
}): GlobalDeclarations;
/**
 * Returns all declarations (functions or variables) from a given tree.
 * This includes local variables.
 */
export declare function getAllDeclarationsInTree({ tree, uri, }: {
    tree: Parser.Tree;
    uri: string;
}): LSP.SymbolInformation[];
/**
 * Returns declarations available for the given file and location.
 * The heuristics used is a simplification compared to bash behaviour,
 * but deemed good enough, compared to the complexity of flow tracing.
 *
 * Used when getting declarations for the current scope.
 */
export declare function getLocalDeclarations({ node, rootNode, uri, }: {
    node: Parser.SyntaxNode | null;
    rootNode: Parser.SyntaxNode;
    uri: string;
}): Declarations;
export type FindDeclarationParams = {
    /**
     * The node where the search will start.
     */
    baseNode: Parser.SyntaxNode;
    symbolInfo: {
        position: LSP.Position;
        uri: string;
        word: string;
        kind: LSP.SymbolKind;
    };
    otherInfo: {
        /**
         * The current URI being searched.
         */
        currentUri: string;
        /**
         * The line (LSP semantics) or row (tree-sitter semantics) at which to stop
         * searching.
         */
        boundary: LSP.uinteger;
    };
};
/**
 * Searches for the original declaration of `symbol`. Global semantics here
 * means that the symbol is not local to a function, hence, `baseNode` should
 * either be a `subshell` or a `program` and `symbolInfo` should contain data
 * about a variable or a function.
 */
export declare function findDeclarationUsingGlobalSemantics({ baseNode, symbolInfo: { position, uri, word, kind }, otherInfo: { currentUri, boundary }, }: FindDeclarationParams): {
    declaration: Parser.SyntaxNode | null | undefined;
    continueSearching: boolean;
};
/**
 * Searches for the original declaration of `symbol`. Local semantics here
 * means that the symbol is local to a function, hence, `baseNode` should
 * be the `compound_statement` of a `function_definition` and `symbolInfo`
 * should contain data about a variable.
 */
export declare function findDeclarationUsingLocalSemantics({ baseNode, symbolInfo: { position, word }, otherInfo: { boundary }, }: FindDeclarationParams): {
    declaration: Parser.SyntaxNode | null | undefined;
    continueSearching: boolean;
};
