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
    VideosThumbnailsModel: function() {
        return VideosThumbnailsModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let VideosThumbnailsModel = class VideosThumbnailsModel extends _sequelize.Model {
};
function _default(sequelize) {
    VideosThumbnailsModel.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        videoId: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        thumbnail: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        },
        status: {
            allowNull: true,
            type: (0, _sequelize.ENUM)('active', 'inactive', 'deleted')
        },
        quality: {
            allowNull: true,
            type: (0, _sequelize.ENUM)('default', 'medium', 'high', 'standard', 'maxres'),
            defaultValue: 'default'
        },
        language: {
            allowNull: true,
            type: _sequelize.DataTypes.STRING(45)
        }
    }, {
        tableName: 'videos_thumbnails',
        sequelize,
        createdAt: false,
        updatedAt: false
    });
    VideosThumbnailsModel.sync({
        alter: true
    });
    return VideosThumbnailsModel;
}

//# sourceMappingURL=videos.thumnails.model.js.map