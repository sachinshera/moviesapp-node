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
const _seriescontroller = require("../../controllers/series/series.controller");
const _seriesdto = require("../../dtos/series/series.dto");
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
let SeriesRoutes = class SeriesRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_seriesdto.addSeriesDto, 'body'), _seriescontroller.SeriesController.addSeries);
        this.router.get(`${this.path}`, _seriescontroller.SeriesController.getAllSeries);
        this.router.get(`${this.path}/:id`, _authmiddleware.default, _seriescontroller.SeriesController.getSeriesById);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_seriesdto.addSeriesDto, 'body', true), _seriescontroller.SeriesController.updateSeriesById);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _seriescontroller.SeriesController.deleteSeriesById);
        this.router.get(`${this.path}/genre/:id`, _seriescontroller.SeriesController.getSeriesByGenreId);
        this.router.get(`${this.path}/category/:id`, _seriescontroller.SeriesController.getSeriesByCategoryId);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/series');
        this.initializeRoutes();
    }
};
const _default = SeriesRoutes;

//# sourceMappingURL=series.routes.js.map