"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SeriesSeasonService", {
    enumerable: true,
    get: function() {
        return SeriesSeasonService;
    }
});
const _seriesmodel = require("../../models/series/series.model");
const _seriesseasonsmodel = require("../../models/series/series.seasons.model");
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
let SeriesSeasonService = class SeriesSeasonService {
    static async addSeason(seriesId, season) {
        try {
            const seriesExists = await _seriesmodel.SeriesModel.findOne({
                where: {
                    id: seriesId
                }
            });
            if (!seriesExists) {
                throw new Error('Series does not exist');
            }
            const seasonExists = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
                where: {
                    season: season.season
                }
            });
            if (seasonExists) {
                throw new Error('Season already exists');
            }
            const id = (0, _nanoid.nanoid)();
            const newSeason = _seriesseasonsmodel.SeriesSeasonsModel.create(_object_spread({
                id: id,
                series_id: seriesId
            }, season));
            return newSeason;
        } catch (err) {
            throw err;
        }
    }
    static async getAllSeasons(seriesId) {
        const seasons = await _seriesseasonsmodel.SeriesSeasonsModel.findAll({
            where: {
                series_id: seriesId
            }
        });
        return seasons;
    }
    static async getSeasonById(seriesId, seasonId) {
        const season = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
            where: {
                series_id: seriesId,
                id: seasonId
            }
        });
        return season;
    }
    static async updateSeason(seriesId, seasonId, season) {
        const seasonExists = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
            where: {
                series_id: seriesId,
                id: seasonId
            }
        });
        if (!seasonExists) {
            throw new Error('Season does not exist');
        }
        const updatedSeason = await _seriesseasonsmodel.SeriesSeasonsModel.update(_object_spread({}, season), {
            where: {
                series_id: seriesId,
                id: seasonId
            }
        });
        const updatedSeasonData = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
            where: {
                series_id: seriesId,
                id: seasonId
            }
        });
        return updatedSeasonData;
    }
    static async deleteSeason(seriesId, seasonId) {
        const seasonExists = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
            where: {
                series_id: seriesId,
                id: seasonId
            }
        });
        if (!seasonExists) {
            throw new Error('Season does not exist');
        }
        const deletedSeason = await _seriesseasonsmodel.SeriesSeasonsModel.destroy({
            where: {
                series_id: seriesId,
                id: seasonId
            }
        });
        return 'Season deleted successfully';
    }
};

//# sourceMappingURL=series.season.service.js.map