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
const _HttpException = require("../exceptions/HttpException");
const _tokenservice = require("../services/token.service");
const authMiddleware = async (req, res, next)=>{
    try {
        const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization') : null);
        if (Authorization) {
            const verifyToken = await _tokenservice.TokenService.verifyToken(Authorization);
            if (verifyToken) {
                next();
            } else {
                next(new _HttpException.HttpException(401, 'Wrong authentication token'));
            }
        } else {
            next(new _HttpException.HttpException(401, 'Wrong authentication token'));
        }
    } catch (error) {
        next(new _HttpException.HttpException(401, 'Wrong authentication token'));
    }
};
const _default = authMiddleware;

//# sourceMappingURL=auth.middleware.js.map