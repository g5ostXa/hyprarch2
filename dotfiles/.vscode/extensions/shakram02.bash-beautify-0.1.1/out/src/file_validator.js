"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function exists(path) {
    return fs_1.existsSync(path);
}
exports.exists = exists;
//# sourceMappingURL=file_validator.js.map