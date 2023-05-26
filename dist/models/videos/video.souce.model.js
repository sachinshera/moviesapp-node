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
    VideosSourceModel: function() {
        return VideosSourceModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let VideosSourceModel = class VideosSourceModel extends _sequelize.Model {
};
function _default(sequelize) {
    VideosSourceModel.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        videoId: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        source: {
            allowNull: false,
            type: _sequelize.DataTypes.TEXT('long')
        },
        type: {
            allowNull: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        status: {
            allowNull: true,
            type: (0, _sequelize.ENUM)('active', 'inactive', 'deleted'),
            defaultValue: 'active'
        },
        quality: {
            allowNull: true,
            type: _sequelize.DataTypes.STRING(45),
            defaultValue: '720p'
        },
        language: {
            allowNull: true,
            type: _sequelize.DataTypes.STRING(45),
            defaultValue: 'en'
        }
    }, {
        tableName: 'videos_source',
        sequelize,
        createdAt: false,
        updatedAt: false
    });
    VideosSourceModel.sync({
        alter: true
    });
    return VideosSourceModel;
}

//# sourceMappingURL=video.souce.model.js.map