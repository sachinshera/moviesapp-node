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
    AdminUserModel: function() {
        return AdminUserModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let AdminUserModel = class AdminUserModel extends _sequelize.Model {
};
function _default(sequelize) {
    AdminUserModel.init({
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: _sequelize.DataTypes.INTEGER
        },
        username: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        password: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        },
        allowAddUser: {
            allowNull: false,
            type: _sequelize.DataTypes.BOOLEAN
        },
        allowEditUser: {
            allowNull: false,
            type: _sequelize.DataTypes.BOOLEAN
        },
        allowDeleteUser: {
            allowNull: false,
            type: _sequelize.DataTypes.BOOLEAN
        }
    }, {
        tableName: 'admin_users',
        sequelize,
        createdAt: false,
        updatedAt: false
    });
    return AdminUserModel;
}

//# sourceMappingURL=admin.user.model.js.map