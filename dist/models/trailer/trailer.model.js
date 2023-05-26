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
    TrailerModel: function() {
        return TrailerModel;
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
let TrailerModel = class TrailerModel extends _sequelize.Model {
    constructor(...args){
        super(...args);
        _define_property(this, "id", void 0);
        _define_property(this, "movies_series_id", void 0);
        _define_property(this, "url", void 0);
        _define_property(this, "quality", void 0);
        _define_property(this, "status", void 0);
    }
};
function _default(sequelize) {
    TrailerModel.init({
        id: {
            unique: true,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(45)
        },
        movies_series_id: {
            allowNull: false,
            type: _sequelize.DataTypes.STRING(45)
        },
        url: {
            allowNull: true,
            type: _sequelize.DataTypes.TEXT('long')
        },
        quality: {
            allowNull: true,
            type: _sequelize.DataTypes.ENUM('SD', 'HD', '2K', '4K', 'auto'),
            defaultValue: 'auto'
        },
        status: {
            allowNull: true,
            type: _sequelize.DataTypes.BOOLEAN
        }
    }, {
        tableName: 'trailers',
        sequelize,
        createdAt: true,
        updatedAt: true
    });
    return TrailerModel;
}

//# sourceMappingURL=trailer.model.js.map