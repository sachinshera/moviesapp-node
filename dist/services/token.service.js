"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TokenService", {
    enumerable: true,
    get: function() {
        return TokenService;
    }
});
const _sessiontokenmodel = require("../models/session.token.model");
const _bcrypt = _interop_require_default(require("bcrypt"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let TokenService = class TokenService {
    static async gererateToken(userid) {
        const hash = _bcrypt.default.hashSync(new Date().getTime().toString(), 10);
        const expire_in = new Date().getTime() + 24 * 60 * 60 * 1000;
        const create = await _sessiontokenmodel.SessionTokenModel.create({
            token: hash,
            expires_in: expire_in,
            userId: userid
        });
        if (create) {
            return hash;
        } else {
            return false;
        }
    }
    static async verifyToken(token) {
        const findToken = await _sessiontokenmodel.SessionTokenModel.findOne({
            where: {
                token: token
            }
        });
        if (findToken) {
            return true;
        } else {
            return false;
        }
    }
    static async removeToken(token) {
        const findToken = await _sessiontokenmodel.SessionTokenModel.destroy({
            where: {
                token: token
            }
        });
        if (findToken) {
            return true;
        } else {
            return false;
        }
    }
    static async removeAllTokensByUserId(userid) {
        const findToken = await _sessiontokenmodel.SessionTokenModel.destroy({
            where: {
                userId: userid
            }
        });
        if (findToken) {
            return true;
        } else {
            return false;
        }
    }
};

//# sourceMappingURL=token.service.js.map