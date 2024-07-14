import * as LSP from 'vscode-languageserver/node';
export declare enum CompletionItemDataType {
    Builtin = 0,
    Executable = 1,
    ReservedWord = 2,
    Symbol = 3,
    Snippet = 4
}
export interface BashCompletionItem extends LSP.CompletionItem {
    data: {
        type: CompletionItemDataType;
    };
}
