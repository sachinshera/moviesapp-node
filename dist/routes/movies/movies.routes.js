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
const _moviescontroller = _interop_require_default(require("../../controllers/movies/movies.controller"));
const _moviesdto = require("../../dtos/movies/movies.dto");
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
let MoviesRoutes = class MoviesRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_moviesdto.addMoviesDto, 'body'), this.moviesController.addMovie);
        this.router.get(`${this.path}`, this.moviesController.getAllMovies);
        this.router.get(`${this.path}/:id`, this.moviesController.getMovieById);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_moviesdto.addMoviesDto, 'body', true), this.moviesController.updateMovie);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, this.moviesController.deleteMovie);
        this.router.get(`${this.path}/genre/:id`, this.moviesController.getMoviesByGenresId);
        this.router.get(`${this.path}/category/:id`, this.moviesController.getMoviesByCategoryId);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "moviesController", new _moviescontroller.default());
        _define_property(this, "path", '/movies');
        this.initializeRoutes();
    }
};
const _default = MoviesRoutes;

//# sourceMappingURL=movies.routes.js.map