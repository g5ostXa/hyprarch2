"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bash_language_server_1 = require("bash-language-server");
const node_1 = require("vscode-languageserver/node");
const connection = (0, node_1.createConnection)(node_1.ProposedFeatures.all);
connection.onInitialize((params) => __awaiter(void 0, void 0, void 0, function* () {
    const server = yield bash_language_server_1.default.initialize(connection, params);
    server.register(connection);
    return {
        capabilities: server.capabilities(),
    };
}));
connection.listen();
// Don't die on unhandled Promise rejections
process.on('unhandledRejection', (reason, p) => {
    const stack = reason instanceof Error ? reason.stack : reason;
    connection.console.error(`Unhandled Rejection at promise: ${p}, reason: ${stack}`);
});
process.on('SIGPIPE', () => {
    // Don't die when attempting to pipe stdin to a bad spawn
    // https://github.com/electron/electron/issues/13254
});
//# sourceMappingURL=server.js.map