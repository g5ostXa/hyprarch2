import * as LSP from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import * as Parser from 'web-tree-sitter';
import { FindDeclarationParams } from './util/declarations';
/**
 * The Analyzer uses the Abstract Syntax Trees (ASTs) that are provided by
 * tree-sitter to find definitions, reference, etc.
 */
export default class Analyzer {
    private enableSourceErrorDiagnostics;
    private includeAllWorkspaceSymbols;
    private parser;
    private uriToAnalyzedDocument;
    private workspaceFolder;
    constructor({ enableSourceErrorDiagnostics, includeAllWorkspaceSymbols, parser, workspaceFolder, }: {
        enableSourceErrorDiagnostics?: boolean;
        includeAllWorkspaceSymbols?: boolean;
        parser: Parser;
        workspaceFolder: string | null;
    });
    /**
     * Analyze the given document, cache the tree-sitter AST, and iterate over the
     * tree to find declarations.
     */
    analyze({ document, uri, }: {
        document: TextDocument;
        uri: string;
    }): LSP.Diagnostic[];
    /**
     * Initiates a background analysis of the files in the workspaceFolder to
     * enable features across files.
     *
     * NOTE that when the source aware feature is enabled files are also parsed
     * when they are found.
     */
    initiateBackgroundAnalysis({ backgroundAnalysisMaxFiles, globPattern, }: {
        backgroundAnalysisMaxFiles: number;
        globPattern: string;
    }): Promise<{
        filesParsed: number;
    }>;
    /**
     * Find all the locations where the word was declared.
     */
    findDeclarationLocations({ position, uri, word, }: {
        position: LSP.Position;
        uri: string;
        word: string;
    }): LSP.Location[];
    /**
     * Find all the declaration symbols in the workspace matching the query using fuzzy search.
     */
    findDeclarationsWithFuzzySearch(query: string): LSP.SymbolInformation[];
    /**
     * Find declarations for the given word and position.
     */
    findDeclarationsMatchingWord({ exactMatch, position, uri, word, }: {
        exactMatch: boolean;
        position: LSP.Position;
        uri: string;
        word: string;
    }): LSP.SymbolInformation[];
    /**
     * Find a symbol's original declaration and parent scope based on its original
     * definition with respect to its scope.
     */
    findOriginalDeclaration(params: FindDeclarationParams['symbolInfo']): {
        declaration: LSP.Location | null;
        parent: LSP.Location | null;
    };
    /**
     * Find all the locations where the given word was defined or referenced.
     * This will include commands, functions, variables, etc.
     *
     * It's currently not scope-aware, see findOccurrences.
     */
    findReferences(word: string): LSP.Location[];
    /**
     * Find all occurrences of a word in the given file.
     * It's currently not scope-aware.
     *
     * This will include commands, functions, variables, etc.
     *
     * It's currently not scope-aware, meaning references does include
     * references to functions and variables that has the same name but
     * are defined in different files.
     */
    findOccurrences(uri: string, word: string): LSP.Location[];
    /**
     * A more scope-aware version of findOccurrences that differentiates between
     * functions and variables.
     */
    findOccurrencesWithin({ uri, word, kind, start, scope, }: {
        uri: string;
        word: string;
        kind: LSP.SymbolKind;
        start?: LSP.Position;
        scope?: LSP.Range;
    }): LSP.Range[];
    getAllVariables({ position, uri, }: {
        position: LSP.Position;
        uri: string;
    }): LSP.SymbolInformation[];
    /**
     * Get all symbol declarations in the given file. This is used for generating an outline.
     *
     * TODO: convert to DocumentSymbol[] which is a hierarchy of symbols found in a given text document.
     */
    getDeclarationsForUri({ uri }: {
        uri: string;
    }): LSP.SymbolInformation[];
    /**
     * Get the document for the given URI.
     */
    getDocument(uri: string): TextDocument | undefined;
    getExplainshellDocumentation({ params, endpoint, }: {
        params: LSP.TextDocumentPositionParams;
        endpoint: string;
    }): Promise<{
        helpHTML?: string;
    }>;
    /**
     * Find the name of the command at the given point.
     */
    commandNameAtPoint(uri: string, line: number, column: number): string | null;
    /**
     * Find a block of comments above a line position
     */
    commentsAbove(uri: string, line: number): string | null;
    /**
     * Find the full word at the given point.
     */
    wordAtPoint(uri: string, line: number, column: number): string | null;
    wordAtPointFromTextPosition(params: LSP.TextDocumentPositionParams): string | null;
    symbolAtPointFromTextPosition(params: LSP.TextDocumentPositionParams): {
        word: string;
        range: LSP.Range;
        kind: LSP.SymbolKind;
    } | null;
    setEnableSourceErrorDiagnostics(enableSourceErrorDiagnostics: boolean): void;
    setIncludeAllWorkspaceSymbols(includeAllWorkspaceSymbols: boolean): void;
    /**
     * If includeAllWorkspaceSymbols is true, this returns all URIs from the
     * background analysis, else, it returns the URIs of the files that are
     * linked to `uri` via sourcing.
     */
    findAllLinkedUris(uri: string): string[];
    /**
     * Returns all reachable URIs from the given URI based on sourced commands
     * If no URI is given, all URIs from the background analysis are returned.
     * If the includeAllWorkspaceSymbols flag is set, all URIs from the background analysis are also included.
     */
    private getReachableUris;
    /**
     * Returns all reachable URIs from `fromUri` based on source commands in
     * descending order starting from the top of the sourcing tree, this list
     * includes `fromUri`. If includeAllWorkspaceSymbols is true, other URIs from
     * the background analysis are also included after the ordered URIs in no
     * particular order.
     */
    private getOrderedReachableUris;
    private getAnalyzedReachableUris;
    private ensureUrisAreAnalyzed;
    /**
     * Get all declaration symbols (function or variables) from the given file/position
     * or from all files in the workspace. It will take into account the given position
     * to filter out irrelevant symbols.
     *
     * Note that this can return duplicates across the workspace.
     */
    private getAllDeclarations;
    findAllSourcedUris({ uri }: {
        uri: string;
    }): Set<string>;
    /**
     * Returns the parent `subshell` or `function_definition` of the given `node`.
     * To disambiguate between regular `subshell`s and `subshell`s that serve as a
     * `function_definition`'s body, this only returns a `function_definition` if
     * its body is a `compound_statement`.
     */
    private parentScope;
    /**
     * Find the node at the given point.
     */
    private nodeAtPoint;
    private nodeAtPoints;
}
