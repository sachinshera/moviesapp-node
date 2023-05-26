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
    SessionTokenModel: function() {
        return SessionTokenModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let SessionTokenModel = class SessionTokenModel extends _sequelize.Model {
};
function _default(sequelize) {
    SessionTokenModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: _sequelize.DataTypes.INTEGER
        },
        token: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        },
        userId: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        },
        token_type: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255),
            defaultValue: 'Bearer'
        },
        expires_in: {
            allowNull: false,
            type: _sequelize.DataTypes.INTEGER,
            defaultValue: 3600
        }
    }, {
        tableName: 'session_tokens',
        sequelize,
        createdAt: false,
        updatedAt: false
    });
    return SessionTokenModel;
}

//# sourceMappingURL=session.token.model.js.map