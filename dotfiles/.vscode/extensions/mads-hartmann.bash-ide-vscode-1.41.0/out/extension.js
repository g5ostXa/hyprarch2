'use strict';
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
exports.deactivate = exports.activate = exports.CONFIGURATION_SECTION = void 0;
const path = require("path");
const vscode_1 = require("vscode");
const node_1 = require("vscode-languageclient/node");
let client;
exports.CONFIGURATION_SECTION = 'bashIde'; // matching the package.json configuration section
function activate(context) {
    return __awaiter(this, void 0, void 0, function* () {
        const config = vscode_1.workspace.getConfiguration(exports.CONFIGURATION_SECTION);
        const env = Object.assign(Object.assign({}, process.env), { BASH_IDE_LOG_LEVEL: config.get('logLevel', '') });
        const serverExecutable = {
            module: context.asAbsolutePath(path.join('out', 'server.js')),
            transport: node_1.TransportKind.ipc,
            options: {
                env,
            },
        };
        const debugServerExecutable = Object.assign(Object.assign({}, serverExecutable), { options: Object.assign(Object.assign({}, serverExecutable.options), { execArgv: ['--nolazy', '--inspect=6009'] }) });
        const serverOptions = {
            run: serverExecutable,
            debug: debugServerExecutable,
        };
        // NOTE: To debug a server running in a process, use the following instead:
        // This requires the server to be globally installed.
        // const serverOptions = {
        //   command: 'bash-language-server',
        //   args: ['start'],
        // }
        const clientOptions = {
            documentSelector: [
                {
                    scheme: 'file',
                    language: 'shellscript',
                },
            ],
            synchronize: {
                configurationSection: exports.CONFIGURATION_SECTION,
            },
        };
        const client = new node_1.LanguageClient('Bash IDE', 'Bash IDE', serverOptions, clientOptions);
        client.registerProposedFeatures();
        try {
            yield client.start();
        }
        catch (error) {
            client.error(`Start failed`, error, 'force');
        }
    });
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map