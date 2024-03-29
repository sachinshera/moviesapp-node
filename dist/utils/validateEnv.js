"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _envalid = require("envalid");
function validateEnv() {
    (0, _envalid.cleanEnv)(process.env, {
        NODE_ENV: (0, _envalid.str)(),
        PORT: (0, _envalid.port)()
    });
}
const _default = validateEnv;

//# sourceMappingURL=validateEnv.js.map