import { z } from 'zod';
declare const ReplacementSchema: z.ZodObject<{
    precedence: z.ZodNumber;
    line: z.ZodNumber;
    endLine: z.ZodNumber;
    column: z.ZodNumber;
    endColumn: z.ZodNumber;
    insertionPoint: z.ZodString;
    replacement: z.ZodString;
}, "strip", z.ZodTypeAny, {
    precedence: number;
    line: number;
    endLine: number;
    column: number;
    endColumn: number;
    insertionPoint: string;
    replacement: string;
}, {
    precedence: number;
    line: number;
    endLine: number;
    column: number;
    endColumn: number;
    insertionPoint: string;
    replacement: string;
}>;
declare const LevelSchema: z.ZodEnum<["error", "warning", "info", "style"]>;
export declare const ShellCheckResultSchema: z.ZodObject<{
    comments: z.ZodArray<z.ZodObject<{
        file: z.ZodString;
        line: z.ZodNumber;
        endLine: z.ZodNumber;
        column: z.ZodNumber;
        endColumn: z.ZodNumber;
        level: z.ZodEnum<["error", "warning", "info", "style"]>;
        code: z.ZodNumber;
        message: z.ZodString;
        fix: z.ZodNullable<z.ZodObject<{
            replacements: z.ZodArray<z.ZodObject<{
                precedence: z.ZodNumber;
                line: z.ZodNumber;
                endLine: z.ZodNumber;
                column: z.ZodNumber;
                endColumn: z.ZodNumber;
                insertionPoint: z.ZodString;
                replacement: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }, {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            replacements: {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }[];
        }, {
            replacements: {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }[];
        }>>;
    }, "strip", z.ZodTypeAny, {
        code: number;
        message: string;
        line: number;
        endLine: number;
        column: number;
        endColumn: number;
        file: string;
        level: "info" | "warning" | "error" | "style";
        fix: {
            replacements: {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }[];
        } | null;
    }, {
        code: number;
        message: string;
        line: number;
        endLine: number;
        column: number;
        endColumn: number;
        file: string;
        level: "info" | "warning" | "error" | "style";
        fix: {
            replacements: {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }[];
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    comments: {
        code: number;
        message: string;
        line: number;
        endLine: number;
        column: number;
        endColumn: number;
        file: string;
        level: "info" | "warning" | "error" | "style";
        fix: {
            replacements: {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }[];
        } | null;
    }[];
}, {
    comments: {
        code: number;
        message: string;
        line: number;
        endLine: number;
        column: number;
        endColumn: number;
        file: string;
        level: "info" | "warning" | "error" | "style";
        fix: {
            replacements: {
                precedence: number;
                line: number;
                endLine: number;
                column: number;
                endColumn: number;
                insertionPoint: string;
                replacement: string;
            }[];
        } | null;
    }[];
}>;
export type ShellCheckResult = z.infer<typeof ShellCheckResultSchema>;
export type ShellCheckComment = ShellCheckResult['comments'][number];
export type ShellCheckCommentLevel = z.infer<typeof LevelSchema>;
export type ShellCheckReplacement = z.infer<typeof ReplacementSchema>;
export {};
