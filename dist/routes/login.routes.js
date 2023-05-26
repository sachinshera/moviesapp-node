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
const _logincontroller = require("../controllers/login.controller");
const _adminusersdto = require("../dtos/admin.users.dto");
const _tokendto = require("../dtos/token.dto");
const _validationmiddleware = _interop_require_default(require("../middlewares/validation.middleware"));
const _express = require("express");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let LoginRoutes = class LoginRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_adminusersdto.adminLoginDto, 'body'), _logincontroller.LoginController.login);
        this.router.post(`${this.path}/verifytoken`, (0, _validationmiddleware.default)(_tokendto.tokenDto, 'body'), _logincontroller.LoginController.verifyToken);
        this.router.post(`${this.path}/refreshtoken`, (0, _validationmiddleware.default)(_tokendto.RefreshtokenDto, 'body'), _logincontroller.LoginController.refreshToken);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/login');
        this.initializeRoutes();
    }
};
const _default = LoginRoutes;

//# sourceMappingURL=login.routes.js.map