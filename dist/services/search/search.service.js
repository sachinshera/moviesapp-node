"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SearchService;
    }
});
const _moviesmodel = require("../../models/movies/movies.model");
const _seriesmodel = require("../../models/series/series.model");
const _sequelize = require("sequelize");
let SearchService = class SearchService {
    static async search(query) {
        if (query.length < 3) {
            const movies = await _moviesmodel.MoviesModel.findAll({
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
                        association: 'trailers',
                        as: 'trailers'
                    }
                ]
            });
            const series = await _seriesmodel.SeriesModel.findAll({
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
            });
            movies.forEach((movie)=>{
                movie.setDataValue('type', 'movie');
            });
            series.forEach((serie)=>{
                serie.setDataValue('type', 'series');
            });
            return [
                ...movies,
                ...series
            ];
        }
        try {
            const movies = await _moviesmodel.MoviesModel.findAll({
                where: {
                    [_sequelize.Op.or]: [
                        {
                            title: {
                                [_sequelize.Op.match]: query
                            }
                        },
                        {
                            description: {
                                [_sequelize.Op.match]: query
                            }
                        }
                    ]
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
                        association: 'trailers',
                        as: 'trailers'
                    }
                ]
            });
            const series = await _seriesmodel.SeriesModel.findAll({
                where: {
                    [_sequelize.Op.or]: [
                        {
                            name: {
                                [_sequelize.Op.match]: query
                            }
                        },
                        {
                            description: {
                                [_sequelize.Op.match]: query
                            }
                        }
                    ]
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
            });
            movies.forEach((movie)=>{
                movie.setDataValue('type', 'movie');
            });
            series.forEach((serie)=>{
                serie.setDataValue('type', 'series');
            });
            return [
                ...movies,
                ...series
            ];
        } catch (e) {
            console.log(e);
        }
    }
};

//# sourceMappingURL=search.service.js.map