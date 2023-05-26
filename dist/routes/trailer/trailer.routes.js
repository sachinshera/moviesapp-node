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
const _trailercontroller = require("../../controllers/trailer/trailer.controller");
const _trailerdto = require("../../dtos/trailer/trailer.dto");
const _express = require("express");
const _authmiddleware = _interop_require_default(require("../../middlewares/auth.middleware"));
const _validationmiddleware = _interop_require_default(require("../../middlewares/validation.middleware"));
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
let TrailerRoutes = class TrailerRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_trailerdto.addTrailerDto, 'body'), _trailercontroller.TrailerController.createTrailer);
        this.router.get(`${this.path}`, _authmiddleware.default, _trailercontroller.TrailerController.getAllTrailers);
        this.router.get(`${this.path}/movie/:id`, _authmiddleware.default, _trailercontroller.TrailerController.getTrailerByMovieId);
        this.router.get(`${this.path}/series/:id`, _authmiddleware.default, _trailercontroller.TrailerController.getTrailerBySeriesId);
        this.router.put(`${this.path}/movie/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_trailerdto.addTrailerDto, 'body'), _trailercontroller.TrailerController.updateTrailerByMovieId);
        this.router.put(`${this.path}/series/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_trailerdto.addTrailerDto, 'body'), _trailercontroller.TrailerController.updateTrailerBySeriesId);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _trailercontroller.TrailerController.deleteTrailerById);
        this.router.delete(`${this.path}/movie/:id`, _authmiddleware.default, _trailercontroller.TrailerController.deleteTrailerByMovieId);
        this.router.delete(`${this.path}/series/:id`, _authmiddleware.default, _trailercontroller.TrailerController.deleteTrailerBySeriesId);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/trailer');
        this.initializeRoutes();
    }
};
const _default = TrailerRoutes;

//# sourceMappingURL=trailer.routes.js.map