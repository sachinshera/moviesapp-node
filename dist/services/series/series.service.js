"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SeriesService", {
    enumerable: true,
    get: function() {
        return SeriesService;
    }
});
const _seriesmodel = require("../../models/series/series.model");
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
let SeriesService = class SeriesService {
    static async createSeries(series) {
        const seriesExists = await _seriesmodel.SeriesModel.findOne({
            where: {
                name: series.name
            }
        });
        if (seriesExists) {
            throw new Error('Series already exists');
        }
        const id = (0, _nanoid.nanoid)();
        const newSeries = new _seriesmodel.SeriesModel(_object_spread({
            id
        }, series));
        await newSeries.save();
        return newSeries;
    }
    static async getAllSeries(limit, offset, q, date) {
        const series = await _seriesmodel.SeriesModel.findAll({
            limit,
            offset,
            where: {
                name: {
                    [_sequelize.Op.like]: `%${q}%`
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
                },
                {
                    association: 'banners'
                }
            ]
        });
        return series;
    }
    static async getSeriesById(id) {
        const series = await _seriesmodel.SeriesModel.findOne({
            where: {
                id
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
                },
                {
                    association: 'banners'
                }
            ]
        });
        return series;
    }
    static async updateSeries(id, series) {
        const updatedSeries = await _seriesmodel.SeriesModel.update(series, {
            where: {
                id
            }
        });
        const seriesById = await _seriesmodel.SeriesModel.findOne({
            where: {
                id
            }
        });
        return seriesById;
    }
    static async deleteSeries(id) {
        const deletedSeries = await _seriesmodel.SeriesModel.destroy({
            where: {
                id
            }
        });
        return 'Series deleted successfully';
    }
};

//# sourceMappingURL=series.service.js.map