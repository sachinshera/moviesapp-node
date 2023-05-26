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
    MoviesModel: function() {
        return MoviesModel;
    },
    default: function() {
        return _default;
    }
});
const _sequelize = require("sequelize");
let MoviesModel = class MoviesModel extends _sequelize.Model {
};
function _default(sequelize) {
    MoviesModel.init({
        id: {
            unique: true,
            primaryKey: true,
            type: _sequelize.DataTypes.STRING(255)
        },
        title: {
            type: _sequelize.DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: _sequelize.DataTypes.TEXT,
            allowNull: true
        },
        release_date: {
            type: _sequelize.DataTypes.DATE,
            allowNull: true
        },
        rating: {
            type: _sequelize.DataTypes.FLOAT,
            allowNull: true
        },
        region: {
            type: _sequelize.DataTypes.STRING(255),
            allowNull: true
        },
        language: {
            type: _sequelize.DataTypes.STRING(255),
            allowNull: true
        },
        genre: {
            type: _sequelize.DataTypes.STRING(255)
        },
        status: {
            type: _sequelize.DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active',
            allowNull: true
        },
        video_id: {
            type: _sequelize.DataTypes.STRING(255),
            allowNull: true,
            unique: false
        }
    }, {
        tableName: 'movies',
        sequelize,
        createdAt: true,
        updatedAt: true,
        indexes: [
            {
                name: 'movie_title',
                unique: true,
                fields: [
                    'title'
                ],
                type: 'FULLTEXT'
            },
            {
                name: 'movie_description',
                unique: true,
                fields: [
                    'description'
                ],
                type: 'FULLTEXT'
            }
        ]
    });
    MoviesModel.sync({
        alter: true
    });
    return MoviesModel;
}

//# sourceMappingURL=movies.model.js.map