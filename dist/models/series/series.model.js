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
    SeriesModel: function() {
        return SeriesModel;
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
let SeriesModel = class SeriesModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "name", void 0);
        _define_property(this, "description", void 0);
        _define_property(this, "image", void 0);
        _define_property(this, "trailer", void 0);
        _define_property(this, "status", void 0);
    }
};
function _default(sequelize) {
    SeriesModel.init({
        id: {
            unique: true,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        name: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(255)
        },
        description: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(500)
        },
        image: {
            allowNull: true,
            type: _sequelize.DataTypes.TEXT('long')
        },
        trailer: {
            allowNull: true,
            type: _sequelize.DataTypes.TEXT('long')
        },
        status: {
            allowNull: true,
            type: _sequelize.DataTypes.BOOLEAN
        }
    }, {
        tableName: 'series',
        sequelize,
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
                name: 'series_name',
                unique: true,
                fields: [
                    'name'
                ],
                type: 'FULLTEXT'
            },
            {
                name: 'series_description',
                unique: true,
                type: 'FULLTEXT',
                fields: [
                    'description'
                ]
            }
        ]
    });
    SeriesModel.sync({
        alter: true
    });
    return SeriesModel;
}

//# sourceMappingURL=series.model.js.map