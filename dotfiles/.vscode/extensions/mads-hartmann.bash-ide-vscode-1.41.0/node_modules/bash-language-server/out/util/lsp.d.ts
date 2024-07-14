import * as LSP from 'vscode-languageserver/node';
/**
 * Determine if a position is included in a range.
 */
export declare function isPositionIncludedInRange(position: LSP.Position, range: LSP.Range): boolean;
