"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SeriesSeasonVideoService;
    }
});
const _seriesseasonvideosmodel = require("../../models/series/series.season.videos.model");
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
let SeriesSeasonVideoService = class SeriesSeasonVideoService {
    static async addVideoToSeason(seriesId, seasonId, video) {
        try {
            const season = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
                where: {
                    id: seasonId,
                    series_id: seriesId
                }
            });
            if (!season) {
                throw new Error('Season not found');
            }
            const videoExists = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.findOne({
                where: {
                    season_id: seasonId,
                    video: video.video,
                    series_id: seriesId
                }
            });
            if (videoExists) {
                throw new Error('Video already exists');
            }
            const addVideo = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.create(_object_spread({
                id: (0, _nanoid.nanoid)(),
                series_id: seriesId,
                season_id: seasonId
            }, video));
            return addVideo;
        } catch (err) {
            throw err;
        }
    }
    static async getAllVideosInSeason(seriesId, seasonId) {
        const season = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
            where: {
                id: seasonId,
                series_id: seriesId
            }
        });
        if (!season) {
            throw new Error('Season not found');
        }
        const videos = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.findAll({
            where: {
                series_id: seriesId,
                season_id: seasonId
            }
        });
        return videos;
    }
    static async updateVideoInSeason(seriesId, seasonId, videoId, video) {
        try {
            const season = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
                where: {
                    id: seasonId,
                    series_id: seriesId
                }
            });
            if (!season) {
                throw new Error('Season not found');
            }
            const videoExists = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.findOne({
                where: {
                    id: videoId,
                    series_id: seriesId,
                    season_id: seasonId
                }
            });
            if (!videoExists) {
                throw new Error('Video not found');
            }
            const updateVideo = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.update(_object_spread({}, video), {
                where: {
                    id: videoId,
                    series_id: seriesId,
                    season_id: seasonId
                }
            });
            const updatedVideo = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.findOne({
                where: {
                    id: videoId,
                    series_id: seriesId,
                    season_id: seasonId
                }
            });
            return updatedVideo;
        } catch (err) {
            throw err;
        }
    }
    static async deleteVideoFromSeason(seriesId, seasonId, videoId) {
        try {
            const season = await _seriesseasonsmodel.SeriesSeasonsModel.findOne({
                where: {
                    id: seasonId,
                    series_id: seriesId
                }
            });
            if (!season) {
                throw new Error('Season not found');
            }
            const videoExists = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.findOne({
                where: {
                    id: videoId,
                    series_id: seriesId,
                    season_id: seasonId
                }
            });
            if (!videoExists) {
                throw new Error('Video not found');
            }
            const deleteVideo = await _seriesseasonvideosmodel.SeriesSeasonVideosModel.destroy({
                where: {
                    id: videoId,
                    series_id: seriesId,
                    season_id: seasonId
                }
            });
            return 'Video deleted';
        } catch (err) {
            throw err;
        }
    }
};

//# sourceMappingURL=series.season.video.service.js.map