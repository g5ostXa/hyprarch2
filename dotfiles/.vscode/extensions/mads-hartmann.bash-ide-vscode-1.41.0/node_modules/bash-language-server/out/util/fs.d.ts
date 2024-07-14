export declare function untildify(pathWithTilde: string): string;
export declare function getFilePaths({ globPattern, rootPath, maxItems, }: {
    globPattern: string;
    rootPath: string;
    maxItems: number;
}): Promise<string[]>;
