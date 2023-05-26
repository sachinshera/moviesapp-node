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
const _ganrescontroller = _interop_require_default(require("../../controllers/genres/ganres.controller"));
const _genresdto = require("../../dtos/genres.dto");
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
let GenresRoutes = class GenresRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_genresdto.genresDto, 'body'), _ganrescontroller.default.createGenres);
        this.router.get(`${this.path}`, _ganrescontroller.default.getAllGenres);
        this.router.get(`${this.path}/:id`, _authmiddleware.default, _ganrescontroller.default.getGenresById);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _ganrescontroller.default.deleteGenres);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_genresdto.genresDto, 'body', true), _ganrescontroller.default.updateGenres);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/genres');
        this.initializeRoutes();
    }
};
const _default = GenresRoutes;

//# sourceMappingURL=genres.routes.js.map