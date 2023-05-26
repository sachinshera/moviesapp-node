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
    SeriesSeasonVideoController: function() {
        return SeriesSeasonVideoController;
    },
    default: function() {
        return _default;
    }
});
const _seriesseasonvideoservice = _interop_require_default(require("../../services/series/series.season.video.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let SeriesSeasonVideoController = class SeriesSeasonVideoController {
    static async addVideoToSeason(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const addVideoToSeason = await _seriesseasonvideoservice.default.addVideoToSeason(seriesId, seasonId, req.body);
            return res.status(200).json(addVideoToSeason);
        } catch (err) {
            console.log(err);
            if (err.message == 'Season not found') {
                res.status(400).json({
                    message: 'Season not found'
                });
            }
            if (err.message == 'Video already exists') {
                res.status(400).json({
                    message: 'Video already exists'
                });
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }
    static async getAllVideosInSeason(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const getAllVideosInSeason = await _seriesseasonvideoservice.default.getAllVideosInSeason(seriesId, seasonId);
            res.send(getAllVideosInSeason);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async updateVideoInSeason(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const videoId = req.params.videoId;
            const updateVideoInSeason = await _seriesseasonvideoservice.default.updateVideoInSeason(seriesId, seasonId, videoId, req.body);
            res.send(updateVideoInSeason);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteVideoInSeason(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const videoId = req.params.videoId;
            const deleteVideoInSeason = await _seriesseasonvideoservice.default.deleteVideoFromSeason(seriesId, seasonId, videoId);
            res.send(deleteVideoInSeason);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
};
const _default = SeriesSeasonVideoController;

//# sourceMappingURL=series.season.video.controller.js.map