"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoginController", {
    enumerable: true,
    get: function() {
        return LoginController;
    }
});
const _loginservice = require("../services/login.service");
const _tokenservice = require("../services/token.service");
let LoginController = class LoginController {
    static async login(req, res) {
        const username = req.body.username;
        const password = req.body.password;
        try {
            const loginResult = await _loginservice.LoginServie.login(username, password);
            if (loginResult == 'user not found') {
                return res.status(404).json({
                    message: 'INVALID CREDENTIALS'
                });
            }
            if (loginResult == 'error in token generation') {
                return res.status(500).json({
                    message: 'INTERNAL SERVER ERROR'
                });
            } else {
                return res.status(200).json({
                    message: 'LOGIN SUCCESS',
                    token: loginResult
                });
            }
        } catch (err) {
            res.status(500).json({
                message: 'INTERNAL SERVER ERROR'
            });
        }
    }
    static async verifyToken(req, res) {
        const token = req.body.token;
        try {
            const verifyToken = await _tokenservice.TokenService.verifyToken(token);
            if (verifyToken) {
                return res.status(200).json({
                    message: 'TOKEN VERIFIED'
                });
            } else {
                return res.status(404).json({
                    message: 'INVALID TOKEN'
                });
            }
        } catch (err) {
            res.status(500).json({
                message: 'INTERNAL SERVER ERROR'
            });
        }
    }
    static async refreshToken(req, res) {
        const token = req.body.token;
        const userame = req.body.username;
        try {
            const verifyToken = await _tokenservice.TokenService.verifyToken(token);
            await _tokenservice.TokenService.removeAllTokensByUserId(userame);
            if (verifyToken) {
                const newToken = await _tokenservice.TokenService.gererateToken(userame);
                if (!newToken) {
                    console.log('64', newToken);
                    return res.status(500).json({
                        message: 'INTERNAL SERVER ERROR'
                    });
                } else {
                    return res.status(200).json({
                        message: 'TOKEN REFRESHED',
                        token: newToken
                    });
                }
            } else {
                return res.status(404).json({
                    message: 'INVALID TOKEN'
                });
            }
        } catch (err) {
            console.log('79', err);
            res.status(500).json({
                message: 'INTERNAL SERVER ERROR'
            });
        }
    }
};

//# sourceMappingURL=login.controller.js.map