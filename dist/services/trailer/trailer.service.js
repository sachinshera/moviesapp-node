"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TrailerService;
    }
});
const _trailermodel = require("../../models/trailer/trailer.model");
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
let TrailerService = class TrailerService {
    static async getAllTrailers() {
        const trailers = await _trailermodel.TrailerModel.findAll();
        return trailers ? trailers : [];
    }
    static async createTrailer(data) {
        try {
            const trailer = await _trailermodel.TrailerModel.create(_object_spread({
                id: (0, _nanoid.nanoid)()
            }, data));
            return trailer;
        } catch (err) {
            console.log(err);
        }
    }
    static async getTrailerByMovieId(movieId) {
        const trailer = await _trailermodel.TrailerModel.findOne({
            where: {
                movies_series_id: movieId
            }
        });
        return trailer;
    }
    static async getTrailerBySeriesId(seriesId) {
        const trailer = await _trailermodel.TrailerModel.findOne({
            where: {
                movies_series_id: seriesId
            }
        });
        return trailer;
    }
    static async updateTrailerByMovieId(movieId, data) {
        const { url , quality  } = data;
        const trailer = await _trailermodel.TrailerModel.update({
            url,
            quality
        }, {
            where: {
                movies_series_id: movieId
            }
        });
        return trailer;
    }
    static async updateTrailerBySeriesId(seriesId, data) {
        const { url , quality  } = data;
        const trailer = await _trailermodel.TrailerModel.update({
            url,
            quality
        }, {
            where: {
                movies_series_id: seriesId
            }
        });
        return trailer;
    }
    static async deleteTrailerByMovieId(movieId) {
        const trailer = await _trailermodel.TrailerModel.destroy({
            where: {
                movies_series_id: movieId
            }
        });
        return trailer;
    }
    static async deleteTrailerBySeriesId(seriesId) {
        const trailer = await _trailermodel.TrailerModel.destroy({
            where: {
                movies_series_id: seriesId
            }
        });
        return trailer;
    }
    static async deleteTrailerById(id) {
        const trailer = await _trailermodel.TrailerModel.destroy({
            where: {
                id
            }
        });
        return trailer;
    }
};

//# sourceMappingURL=trailer.service.js.map