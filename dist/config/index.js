"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CREDENTIALS: function() {
        return CREDENTIALS;
    },
    NODE_ENV: function() {
        return NODE_ENV;
    },
    PORT: function() {
        return PORT;
    },
    DB_HOST: function() {
        return DB_HOST;
    },
    DB_PORT: function() {
        return DB_PORT;
    },
    DB_USER: function() {
        return DB_USER;
    },
    DB_PASSWORD: function() {
        return DB_PASSWORD;
    },
    DB_DATABASE: function() {
        return DB_DATABASE;
    },
    SECRET_KEY: function() {
        return SECRET_KEY;
    },
    LOG_FORMAT: function() {
        return LOG_FORMAT;
    },
    LOG_DIR: function() {
        return LOG_DIR;
    },
    ORIGIN: function() {
        return ORIGIN;
    }
});
const _dotenv = require("dotenv");
(0, _dotenv.config)({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`
});
const CREDENTIALS = process.env.CREDENTIALS === 'true';
const { NODE_ENV , PORT , DB_HOST , DB_PORT , DB_USER , DB_PASSWORD , DB_DATABASE , SECRET_KEY , LOG_FORMAT , LOG_DIR , ORIGIN  } = process.env;

//# sourceMappingURL=index.js.map