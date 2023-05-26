"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginServie", {
    enumerable: true,
    get: function() {
        return LoginServie;
    }
});
const _adminusermodel = require("../models/admin.user.model");
const _tokenservice = require("./token.service");
let LoginServie = class LoginServie {
    static async login(username, password) {
        const findUser = await _adminusermodel.AdminUserModel.findOne({
            where: {
                username: username,
                password: password
            }
        });
        if (findUser) {
            await _tokenservice.TokenService.removeAllTokensByUserId(username);
            const token = await _tokenservice.TokenService.gererateToken(username);
            if (token) {
                return token;
            } else {
                return 'error in token generation';
            }
        } else {
            return 'user not found';
        }
    }
};

//# sourceMappingURL=login.service.js.map