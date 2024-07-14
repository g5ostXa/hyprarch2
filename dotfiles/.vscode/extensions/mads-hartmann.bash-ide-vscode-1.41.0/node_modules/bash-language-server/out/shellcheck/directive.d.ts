type Directive = {
    type: 'enable';
    rules: string[];
} | {
    type: 'disable';
    rules: string[];
} | {
    type: 'source';
    path: string;
} | {
    type: 'source-path';
    path: string;
} | {
    type: 'shell';
    shell: string;
};
export declare function parseShellCheckDirective(line: string): Directive[];
export {};
