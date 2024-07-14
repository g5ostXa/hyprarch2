import * as LSP from 'vscode-languageserver';
export declare const LOG_LEVEL_ENV_VAR = "BASH_IDE_LOG_LEVEL";
export declare const LOG_LEVELS: readonly ["debug", "info", "warning", "error"];
export declare const DEFAULT_LOG_LEVEL: LogLevel;
type LogLevel = (typeof LOG_LEVELS)[number];
/**
 * Set the log connection. Should be done at startup.
 */
export declare function setLogConnection(connection: LSP.Connection): void;
/**
 * Set the minimum log level.
 */
export declare function setLogLevel(logLevel: LogLevel): void;
export declare class Logger {
    private prefix;
    constructor({ prefix }?: {
        prefix?: string;
    });
    static MESSAGE_TYPE_TO_LOG_LEVEL_MSG: Record<LSP.MessageType, string>;
    log(severity: LSP.MessageType, messageObjects: any[]): void;
    debug(message: string, ...additionalArgs: any[]): void;
    info(message: string, ...additionalArgs: any[]): void;
    warn(message: string, ...additionalArgs: any[]): void;
    error(message: string, ...additionalArgs: any[]): void;
}
/**
 * Default logger.
 */
export declare const logger: Logger;
/**
 * Get the log level from the environment, before the server initializes.
 * Should only be used internally.
 */
export declare function getLogLevelFromEnvironment(): LSP.MessageType;
export {};
