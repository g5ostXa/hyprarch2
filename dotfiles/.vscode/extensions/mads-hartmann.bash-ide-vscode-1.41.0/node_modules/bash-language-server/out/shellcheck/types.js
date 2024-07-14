"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShellCheckResultSchema = void 0;
const zod_1 = require("zod");
const ReplacementSchema = zod_1.z.object({
    precedence: zod_1.z.number(),
    line: zod_1.z.number(),
    endLine: zod_1.z.number(),
    column: zod_1.z.number(),
    endColumn: zod_1.z.number(),
    insertionPoint: zod_1.z.string(),
    replacement: zod_1.z.string(),
});
// https://github.com/koalaman/shellcheck/blob/364c33395e2f2d5500307f01989f70241c247d5a/src/ShellCheck/Formatter/Format.hs#L50
const LevelSchema = zod_1.z.enum(['error', 'warning', 'info', 'style']);
// Constituent structures defined here:
// https://github.com/koalaman/shellcheck/blob/master/src/ShellCheck/Interface.hs
exports.ShellCheckResultSchema = zod_1.z.object({
    comments: zod_1.z.array(zod_1.z.object({
        file: zod_1.z.string(),
        line: zod_1.z.number(), // 1-based
        endLine: zod_1.z.number(), // 1-based
        column: zod_1.z.number(), // 1-based
        endColumn: zod_1.z.number(), // 1-based
        level: LevelSchema,
        code: zod_1.z.number(),
        message: zod_1.z.string(),
        fix: zod_1.z
            .object({
            replacements: zod_1.z.array(ReplacementSchema),
        })
            .nullable(),
    })),
});
//# sourceMappingURL=types.js.map