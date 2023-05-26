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
    GenresAssocModel: function() {
        return GenresAssocModel;
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
let GenresAssocModel = class GenresAssocModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "movies_series_id", void 0);
        _define_property(this, "genreId", void 0);
        _define_property(this, "type", void 0);
        _define_property(this, "status", void 0);
    }
};
function _default(sequelize) {
    GenresAssocModel.init({
        id: {
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(20),
            unique: true,
            allowNull: false
        },
        movies_series_id: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45),
            unique: false
        },
        genreId: {
            allowNull: true,
            type: _sequelize.DataTypes.STRING(45),
            unique: false
        },
        type: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        status: {
            type: _sequelize.DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true
        }
    }, {
        tableName: 'genres_assoc',
        sequelize,
        createdAt: true,
        updatedAt: true,
        underscored: true
    });
    GenresAssocModel.sync({
        alter: true
    });
    return GenresAssocModel;
}

//# sourceMappingURL=genres.assoc.model.js.map