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
    MoviesBannerModel: function() {
        return MoviesBannerModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let MoviesBannerModel = class MoviesBannerModel extends _sequelize.Model {
};
function _default(sequelize) {
    MoviesBannerModel.init({
        id: {
            unique: true,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(255)
        },
        contentId: {
            type: _sequelize.DataTypes.STRING(255),
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        url: {
            type: _sequelize.DataTypes.TEXT('long'),
            allowNull: false
        },
        quality: {
            type: _sequelize.DataTypes.STRING(10),
            allowNull: true,
            defaultValue: 'HD'
        },
        status: {
            type: _sequelize.DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
            allowNull: true
        }
    }, {
        tableName: 'banners',
        sequelize,
        createdAt: true,
        updatedAt: true
    });
    MoviesBannerModel.sync({
        alter: true
    });
    return MoviesBannerModel;
}

//# sourceMappingURL=movies.banner.model.js.map