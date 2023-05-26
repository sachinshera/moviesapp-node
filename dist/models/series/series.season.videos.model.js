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
    SeriesSeasonVideosModel: function() {
        return SeriesSeasonVideosModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
let SeriesSeasonVideosModel = class SeriesSeasonVideosModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "series_id", void 0);
        _define_property(this, "season_id", void 0);
        _define_property(this, "video", void 0);
        _define_property(this, "status", void 0);
    }
};
function _default(sequelize) {
    SeriesSeasonVideosModel.init({
        id: {
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        series_id: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        season_id: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        video: {
            allowNull: false,
            type: _sequelize.DataTypes.TEXT
        },
        status: {
            allowNull: false,
            type: _sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'series_season_videos',
        sequelize,
        createdAt: true,
        updatedAt: true
    });
    SeriesSeasonVideosModel.sync({
        alter: true
    });
    return SeriesSeasonVideosModel;
}

//# sourceMappingURL=series.season.videos.model.js.map