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
const _videoscontroller = require("../../controllers/videos/videos.controller");
const _videosdtos = require("../../dtos/videos/videos.dtos");
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
let VideosRoutes = class VideosRoutes {
    initializeRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_videosdtos.addVideosDto, 'body'), _videoscontroller.VideosController.addVideos);
        this.router.get(`${this.path}`, _authmiddleware.default, _videoscontroller.VideosController.getAllVideos);
        this.router.get(`${this.path}/:id`, _authmiddleware.default, _videoscontroller.VideosController.getVideosById);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _videoscontroller.VideosController.deleteVideosById);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/videos');
        this.initializeRoutes();
    }
};
const _default = VideosRoutes;

//# sourceMappingURL=videos.routes.js.map