"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MoviesService;
    }
});
const _moviesbannermodel = require("../../models/movies/movies.banner.model");
const _moviesmodel = require("../../models/movies/movies.model");
const _videosoucemodel = require("../../models/videos/video.souce.model");
const _videosmodel = require("../../models/videos/videos.model");
const _videosthumnailsmodel = require("../../models/videos/videos.thumnails.model");
const _nanoid = require("nanoid");
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
let MoviesService = class MoviesService {
    static async addMovie(movie) {
        try {
            const movieExists = await _moviesmodel.MoviesModel.findOne({
                where: {
                    title: movie.title
                }
            });
            if (movieExists) {
                throw new Error('Movie already exists');
            } else {
                const newMovie = await _moviesmodel.MoviesModel.create(_object_spread({
                    id: (0, _nanoid.nanoid)()
                }, movie));
                if (newMovie) {
                    return newMovie;
                } else {
                    throw new Error('Error creating movie');
                }
            }
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    }
    static async getAllMovies() {
        try {
            const movies = await _moviesmodel.MoviesModel.findAll({
                order: [
                    [
                        'createdAt',
                        'DESC'
                    ]
                ],
                include: [
                    {
                        model: _moviesbannermodel.MoviesBannerModel,
                        as: 'banners'
                    },
                    {
                        model: _videosmodel.VideosModel,
                        as: 'videos',
                        include: [
                            {
                                model: _videosoucemodel.VideosSourceModel,
                                as: 'sources'
                            },
                            {
                                model: _videosthumnailsmodel.VideosThumbnailsModel,
                                as: 'thumbnails'
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
            if (movies) {
                return movies;
            } else {
                throw new Error('Error getting movies');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    static async getMovieById(id) {
        try {
            const movie = await _moviesmodel.MoviesModel.findOne({
                where: {
                    id
                },
                include: [
                    {
                        model: _moviesbannermodel.MoviesBannerModel,
                        as: 'banners'
                    },
                    {
                        model: _videosmodel.VideosModel,
                        as: 'videos',
                        include: [
                            {
                                model: _videosoucemodel.VideosSourceModel,
                                as: 'sources'
                            },
                            {
                                model: _videosthumnailsmodel.VideosThumbnailsModel,
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
            if (movie) {
                return movie;
            } else {
                throw new Error('Error getting movie');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    static async updateMovie(id, movie) {
        try {
            const updatedMovie = await _moviesmodel.MoviesModel.update(movie, {
                where: {
                    id
                }
            });
            if (updatedMovie) {
                const movie = await _moviesmodel.MoviesModel.findOne({
                    where: {
                        id
                    }
                });
                return movie;
            } else {
                throw new Error('Error updating movie');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    static async deleteMovie(id) {
        try {
            const deletedMovie = await _moviesmodel.MoviesModel.destroy({
                where: {
                    id
                }
            });
            if (deletedMovie) {
                return 'Movie deleted';
            } else {
                throw new Error('Error deleting movie');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
};

//# sourceMappingURL=movies.service.js.map