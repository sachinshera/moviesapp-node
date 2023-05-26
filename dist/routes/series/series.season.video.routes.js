"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _seriesseasonvideocontroller = _interop_require_default(require("../../controllers/series/series.season.video.controller"));
const _seriesseasonvideodto = require("../../dtos/series/series.season.video.dto");
const _authmiddleware = _interop_require_default(require("../../middlewares/auth.middleware"));
const _validationmiddleware = _interop_require_default(require("../../middlewares/validation.middleware"));
const _express = require("express");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let SeriesSeasonVideoRoutes = class SeriesSeasonVideoRoutes {
    initializeRoutes() {
        this.router.post(this.path, _authmiddleware.default, (0, _validationmiddleware.default)(_seriesseasonvideodto.addSeasonVideoDTO), _seriesseasonvideocontroller.default.addVideoToSeason);
        this.router.get(this.path, _authmiddleware.default, _seriesseasonvideocontroller.default.getAllVideosInSeason);
        this.router.put(this.path + '/:videoId', _authmiddleware.default, (0, _validationmiddleware.default)(_seriesseasonvideodto.addSeasonVideoDTO), _seriesseasonvideocontroller.default.updateVideoInSeason);
        this.router.delete(this.path + '/:videoId', _authmiddleware.default, _seriesseasonvideocontroller.default.deleteVideoInSeason);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/series/:seriesId/season/:seasonId/video');
        this.initializeRoutes();
    }
};
const _default = SeriesSeasonVideoRoutes;

//# sourceMappingURL=series.season.video.routes.js.map