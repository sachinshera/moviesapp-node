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
    CategoryModel: function() {
        return CategoryModel;
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
let CategoryModel = class CategoryModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "name", void 0);
    }
};
function _default(sequelize) {
    CategoryModel.init({
        id: {
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(20)
        },
        name: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        }
    }, {
        tableName: 'categories',
        sequelize,
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
                unique: true,
                fields: [
                    'name'
                ]
            }
        ]
    });
    CategoryModel.sync;
    return CategoryModel;
}

//# sourceMappingURL=category.model.js.map