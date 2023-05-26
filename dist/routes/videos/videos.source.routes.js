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
const _videossoucecontroller = require("../../controllers/videos/videos.souce.controller");
const _videosource = require("../../dtos/videos/video.source");
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
let VideosSourceRoutes = class VideosSourceRoutes {
    initializeRoutes() {
        this.router.get(`${this.path}/:id`, _videossoucecontroller.VideosSourceController.getSourceById);
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_videosource.addVideosSourceDto, 'body'), _videossoucecontroller.VideosSourceController.addVideosSource);
        this.router.delete(`${this.path}/:id`, _videossoucecontroller.VideosSourceController.deleteVideosSourceById);
        this.router.put(`${this.path}/:id`, (0, _validationmiddleware.default)(_videosource.addVideosSourceDto, 'body'), _videossoucecontroller.VideosSourceController.updateVideosSourceById);
        this.router.get(`${this.path}/video/:id`, _videossoucecontroller.VideosSourceController.getVideosSourceById);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/videos/source');
        this.initializeRoutes();
    }
};
const _default = VideosSourceRoutes;

//# sourceMappingURL=videos.source.routes.js.map