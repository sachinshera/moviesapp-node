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
    VideosModel: function() {
        return VideosModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let VideosModel = class VideosModel extends _sequelize.Model {
};
function _default(sequelize) {
    VideosModel.init({
        id: {
            unique: true,
            allowNull: false,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        title: {
            allowNull: false,
            type: _sequelize.DataTypes.TEXT('long')
        },
        description: {
            allowNull: false,
            type: _sequelize.DataTypes.TEXT('long')
        },
        tags: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        },
        status: {
            allowNull: false,
            type: (0, _sequelize.ENUM)('active', 'inactive', 'deleted')
        },
        views: {
            allowNull: false,
            type: _sequelize.DataTypes.INTEGER,
            defaultValue: 0
        },
        language: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45),
            unique: false
        }
    }, {
        tableName: 'videos',
        sequelize,
        createdAt: false,
        updatedAt: false
    });
    VideosModel.sync({
        alter: true
    });
    return VideosModel;
}

//# sourceMappingURL=videos.model.js.map