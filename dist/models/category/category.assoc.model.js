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
    CategoryAssocModel: function() {
        return CategoryAssocModel;
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
let CategoryAssocModel = class CategoryAssocModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "series_movie_id", void 0);
        _define_property(this, "status", void 0);
        _define_property(this, "type", void 0);
    }
};
function _default(sequelize) {
    CategoryAssocModel.init({
        id: {
            type: _sequelize.DataTypes.STRING(100),
            primaryKey: true
        },
        series_movie_id: {
            type: _sequelize.DataTypes.STRING(40),
            unique: false,
            allowNull: false
        },
        categoryId: {
            type: _sequelize.DataTypes.STRING(40),
            unique: false,
            allowNull: false
        },
        status: {
            type: _sequelize.DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true
        },
        type: {
            type: _sequelize.DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        tableName: 'categories_assoc',
        sequelize,
        createdAt: true,
        updatedAt: true
    });
    CategoryAssocModel.sync({
        alter: true
    });
    return CategoryAssocModel;
}

//# sourceMappingURL=category.assoc.model.js.map