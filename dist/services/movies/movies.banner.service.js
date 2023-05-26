"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MoviesBannerService;
    }
});
const _moviesbannermodel = require("../../models/movies/movies.banner.model");
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
let MoviesBannerService = class MoviesBannerService {
    static async addMovieBanner(movieBanner) {
        try {
            const newMovieBanner = await _moviesbannermodel.MoviesBannerModel.create(_object_spread({
                id: (0, _nanoid.nanoid)()
            }, movieBanner));
            if (newMovieBanner) {
                return newMovieBanner;
            } else {
                throw new Error('Error creating movie banner');
            }
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    }
    static async getAllMovieBanners() {
        try {
            const movieBanners = await _moviesbannermodel.MoviesBannerModel.findAll();
            return movieBanners;
        } catch (error) {
            console.log('error', error);
            throw new Error(error);
        }
    }
    static async getMovieBannerById(id) {
        try {
            const movieBanner = await _moviesbannermodel.MoviesBannerModel.findOne({
                where: {
                    id
                }
            });
            if (movieBanner) {
                return movieBanner;
            } else {
                throw new Error('Error getting movie banner');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    static async getMovieBannerByMovieId(movieId) {
        try {
            const movieBanner = await _moviesbannermodel.MoviesBannerModel.findOne({
                where: {
                    contentId: movieId
                }
            });
            if (movieBanner) {
                return movieBanner;
            } else {
                throw new Error('Error getting movie banner');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    static async updateMovieBanner(movieBanner) {
        try {
            const movieBannerExists = await _moviesbannermodel.MoviesBannerModel.findOne({
                where: {
                    id: movieBanner.id
                }
            });
            if (movieBannerExists) {
                const updatedMovieBanner = await _moviesbannermodel.MoviesBannerModel.update(_object_spread({}, movieBanner), {
                    where: {
                        id: movieBanner.id
                    }
                });
                if (updatedMovieBanner) {
                    const UpdatedmovieBanner = await _moviesbannermodel.MoviesBannerModel.findOne({
                        where: {
                            id: movieBanner.id
                        }
                    });
                    return UpdatedmovieBanner;
                }
            } else {
                throw new Error('Movie banner does not exist');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
    static async deleteMovieBanner(id) {
        try {
            const movieBannerExists = await _moviesbannermodel.MoviesBannerModel.findOne({
                where: {
                    id
                }
            });
            if (movieBannerExists) {
                const deletedMovieBanner = await _moviesbannermodel.MoviesBannerModel.destroy({
                    where: {
                        id
                    }
                });
                if (deletedMovieBanner) {
                    return 'Movie banner deleted successfully';
                }
            } else {
                throw new Error('Movie banner does not exist');
            }
        } catch (error) {
            throw new Error(error);
        }
    }
};

//# sourceMappingURL=movies.banner.service.js.map