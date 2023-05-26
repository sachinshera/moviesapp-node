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
const _seriesseasoncontroller = require("../../controllers/series/series.season.controller");
const _seriesseasondto = require("../../dtos/series/series.season.dto");
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
let SeriesSeasonRoutes = class SeriesSeasonRoutes {
    initializeRoutes() {
        this.router.post(this.path, _authmiddleware.default, (0, _validationmiddleware.default)(_seriesseasondto.addSeriesSeasonDto), _seriesseasoncontroller.SeriesSeasonController.addSeason);
        this.router.get(this.path, _authmiddleware.default, _seriesseasoncontroller.SeriesSeasonController.getAllSeasons);
        this.router.get(this.path + '/:seasonId', _authmiddleware.default, _seriesseasoncontroller.SeriesSeasonController.getSeasonById);
        this.router.put(this.path + '/:seasonId', _authmiddleware.default, (0, _validationmiddleware.default)(_seriesseasondto.addSeriesSeasonDto), _seriesseasoncontroller.SeriesSeasonController.updateSeasonById);
        this.router.delete(this.path + '/:seasonId', _authmiddleware.default, _seriesseasoncontroller.SeriesSeasonController.deleteSeasonById);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/series/:seriesId/season');
        this.initializeRoutes();
    }
};
const _default = SeriesSeasonRoutes;

//# sourceMappingURL=series.season.routes.js.map