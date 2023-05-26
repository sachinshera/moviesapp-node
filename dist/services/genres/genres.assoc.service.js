"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GenresAssocService;
    }
});
const _genresassocmodel = require("../../models/genres/genres.assoc.model");
const _nanoid = require("nanoid");
const _sequelize = require("sequelize");
let GenresAssocService = class GenresAssocService {
    static async createGenresAssoc(movies_series_id, genreId, type) {
        try {
            const existing = await _genresassocmodel.GenresAssocModel.findOne({
                where: {
                    movies_series_id,
                    genreId,
                    type
                }
            });
            if (existing) {
                throw new Error('GenresAssoc already exists');
            }
            const genresAssoc = await _genresassocmodel.GenresAssocModel.create({
                id: (0, _nanoid.nanoid)(20),
                movies_series_id,
                genreId,
                type
            });
            return genresAssoc;
        } catch (err) {
            throw err;
        }
    }
    static async getAllGenresAssoc() {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.findAll({
                include: [
                    {
                        association: 'genresDetails'
                    },
                    {
                        association: 'moviesDetails'
                    }
                ]
            });
            return genresAssoc;
        } catch (err) {
            throw err;
        }
    }
    static async getGenresAssocById(id) {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.findOne({
                where: {
                    id
                }
            });
            return genresAssoc;
        } catch (err) {
            throw err;
        }
    }
    static async updateGenresAssoc(id, movies_series_id, genreId, type) {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.update({
                movies_series_id,
                genreId,
                type
            }, {
                where: {
                    id
                }
            });
            return genresAssoc;
        } catch (err) {
            throw err;
        }
    }
    static async deleteGenresAssoc(id) {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.destroy({
                where: {
                    id
                }
            });
            return genresAssoc;
        } catch (err) {
            throw err;
        }
    }
    static async getAllByGenreId(genreId) {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.findAll({
                where: {
                    genreId
                },
                include: [
                    {
                        association: 'moviesDetails'
                    },
                    {
                        association: 'seriesDetails'
                    },
                    {
                        association: 'genresDetails'
                    }
                ],
                attributes: [
                    'type'
                ]
            });
            return genresAssoc;
        } catch (err) {
            throw err;
        }
    }
    static async getMoviesByGenreId(genreId) {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.findAll({
                where: {
                    genreId
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
                        association: 'genresDetails'
                    }
                ]
            });
            let movies = genresAssoc.map((item)=>item.moviesDetails);
            return movies;
        } catch (e) {
            throw e;
        }
    }
    static async getSeriesByGenreId(genreId) {
        try {
            const genresAssoc = await _genresassocmodel.GenresAssocModel.findAll({
                where: {
                    genreId
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
                    },
                    {
                        association: 'genresDetails'
                    }
                ]
            });
            let series = genresAssoc.map((item)=>item.seriesDetails);
            return series;
        } catch (e) {
            throw e;
        }
    }
};

//# sourceMappingURL=genres.assoc.service.js.map