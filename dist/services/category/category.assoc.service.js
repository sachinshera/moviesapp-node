"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return CategoryAssocService;
    }
});
const _categoryassocmodel = require("../../models/category/category.assoc.model");
const _nanoid = require("nanoid");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
let CategoryAssocService = class CategoryAssocService {
    static async AddAssoc(data) {
        try {
            let check = await _categoryassocmodel.CategoryAssocModel.findOne({
                where: {
                    series_movie_id: data.series_movie_id
                }
            });
            if (check) {
                throw new Error('Already exists');
            }
            let add = await _categoryassocmodel.CategoryAssocModel.create(_object_spread({
                id: (0, _nanoid.nanoid)(20)
            }, data));
            return add;
        } catch (e) {
            throw new Error(e);
        }
    }
    static async getAll() {
        return await _categoryassocmodel.CategoryAssocModel.findAll({
            include: [
                {
                    association: 'categoryDetails',
                    attributes: [
                        'name'
                    ]
                },
                {
                    association: 'moviesDetails'
                },
                {
                    association: 'seriesDetails'
                }
            ],
            attributes: [
                'id',
                'type'
            ]
        });
    }
    static async update(data) {
        try {
            let check = await _categoryassocmodel.CategoryAssocModel.findOne({
                where: {
                    series_movie_id: data.series_movie_id
                }
            });
            if (!check) {
                throw new Error('Not found');
            }
            let update = await _categoryassocmodel.CategoryAssocModel.update(data, {
                where: {
                    series_movie_id: data.series_movie_id
                }
            });
            let updated = await _categoryassocmodel.CategoryAssocModel.findOne({
                where: {
                    series_movie_id: data.series_movie_id
                }
            });
            return updated;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
    static async delete(id) {
        try {
            let del = await _categoryassocmodel.CategoryAssocModel.destroy({
                where: {
                    id: id
                }
            });
            return del;
        } catch (error) {
            throw new Error('Failed to delete');
        }
    }
    static async getMoviesByCategoryId(id) {
        try {
            let get = await _categoryassocmodel.CategoryAssocModel.findAll({
                where: {
                    category_id: id,
                    type: 'movie'
                },
                include: [
                    {
                        association: 'moviesDetails',
                        where: {
                            id: {
                                [_sequelize.Op.not]: null
                            }
                        },
                        include: [
                            {
                                association: 'banners',
                                as: 'banners'
                            },
                            {
                                association: 'videos',
                                as: 'videos',
                                include: [
                                    {
                                        association: 'sources',
                                        as: 'sources'
                                    },
                                    {
                                        association: 'thumbnails',
                                        as: 'thumbnails'
                                    }
                                ]
                            },
                            {
                                association: 'trailers'
                            }
                        ]
                    },
                    {
                        association: 'categoryDetails'
                    }
                ]
            });
            let movies = get.map((item)=>item.moviesDetails);
            return movies;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
    static async getSeriesByCategoryId(id) {
        try {
            let get = await _categoryassocmodel.CategoryAssocModel.findAll({
                where: {
                    category_id: id
                },
                include: [
                    {
                        association: 'seriesDetails',
                        where: {
                            id: {
                                [_sequelize.Op.not]: null
                            }
                        },
                        include: [
                            {
                                association: 'seasons',
                                include: [
                                    {
                                        association: 'episodes',
                                        include: [
                                            {
                                                association: 'episodesDetails',
                                                include: [
                                                    {
                                                        association: 'sources'
                                                    },
                                                    {
                                                        association: 'thumbnails'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                association: 'trailers'
                            }
                        ]
                    }
                ]
            });
            let series = get.map((item)=>item.seriesDetails);
            return series;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
};

//# sourceMappingURL=category.assoc.service.js.map