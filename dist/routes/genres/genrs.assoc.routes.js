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
const _genresassoccontroller = _interop_require_default(require("../../controllers/genres/genres.assoc.controller"));
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
let GenresAssocRoutes = class GenresAssocRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_genresdto.genresAssocDto, 'body'), _genresassoccontroller.default.createGenresAssoc);
        this.router.get(`${this.path}`, _genresassoccontroller.default.getAllGenresAssoc);
        this.router.get(`${this.path}/:id`, _authmiddleware.default, _genresassoccontroller.default.getGenresAssocById);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _genresassoccontroller.default.deleteGenresAssoc);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_genresdto.genresAssocDto, 'body', true), _genresassoccontroller.default.updateGenresAssoc);
        this.router.get(`${this.path}/genre/:id`, _genresassoccontroller.default.getAllByGenreid);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/genres/assoc');
        this.initializeRoutes();
    }
};
const _default = GenresAssocRoutes;

//# sourceMappingURL=genrs.assoc.routes.js.map