"use strict";
/**
 * A collection of async utilities.
 * If we ever need to add anything fancy, then https://github.com/vscode-shellcheck/vscode-shellcheck/blob/master/src/utils/async.ts
 * is a good place to look.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
/**
 * Debounce a function call by a given amount of time. Only the last call
 * will be resolved.
 * Inspired by https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940
 */
const debounce = (func, waitForMs) => {
    let timeout = null;
    return (...args) => new Promise((resolve) => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => resolve(func(...args)), waitForMs);
    });
};
exports.debounce = debounce;
//# sourceMappingURL=async.js.map