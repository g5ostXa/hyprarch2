import * as LSP from 'vscode-languageserver/node';
import { ShellCheckCommentLevel } from './types';
export declare const SUPPORTED_BASH_DIALECTS: string[];
export declare const CODE_TO_TAGS: Record<number, LSP.DiagnosticTag[] | undefined>;
export declare const LEVEL_TO_SEVERITY: Record<ShellCheckCommentLevel, LSP.DiagnosticSeverity | undefined>;
