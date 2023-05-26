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
    SeriesSeasonsModel: function() {
        return SeriesSeasonsModel;
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
let SeriesSeasonsModel = class SeriesSeasonsModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "series_id", void 0);
        _define_property(this, "season", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "image", void 0);
        _define_property(this, "trailer", void 0);
        _define_property(this, "status", void 0);
    }
};
function _default(sequelize) {
    SeriesSeasonsModel.init({
        id: {
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        series_id: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        season: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        description: {
            allowNull: true,
            type: _sequelize.DataTypes.STRING(255)
        },
        image: {
            allowNull: true,
            type: _sequelize.DataTypes.TEXT
        },
        trailer: {
            allowNull: true,
            type: _sequelize.DataTypes.TEXT
        },
        status: {
            allowNull: false,
            type: _sequelize.DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        tableName: 'series_seasons',
        sequelize,
        createdAt: true,
        updatedAt: true
    });
    SeriesSeasonsModel.sync({
        alter: true
    });
    return SeriesSeasonsModel;
}

//# sourceMappingURL=series.seasons.model.js.map