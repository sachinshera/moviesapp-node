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
const _moviesbannercontroller = _interop_require_default(require("../../controllers/movies/movies.banner.controller"));
const _moviesbannerdto = require("../../dtos/movies/movies.banner.dto");
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
let MoviesBannerRoutes = class MoviesBannerRoutes {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.moviesBannerController.getAllMovieBanners);
        this.router.get(`${this.path}/:id`, this.moviesBannerController.getMovieBannerById);
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_moviesbannerdto.addUpdateMoviesBannerDto, 'body'), this.moviesBannerController.addMovieBanner);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_moviesbannerdto.addUpdateMoviesBannerDto, 'body', true), this.moviesBannerController.updateMovieBanner);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, this.moviesBannerController.deleteMovieBanner);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/banner');
        _define_property(this, "moviesBannerController", new _moviesbannercontroller.default());
        this.initializeRoutes();
    }
};
const _default = MoviesBannerRoutes;

//# sourceMappingURL=movies.banner.routes.js.map