"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VideosThumbnailsRoutes;
    }
});
const _videosthumbnailcontroller = require("../../controllers/videos/videos.thumbnail.controller");
const _videosthumbnaildto = require("../../dtos/videos/videos.thumbnail.dto");
const _authmiddleware = _interop_require_default(require("../../middlewares/auth.middleware"));
const _express = require("express");
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
let VideosThumbnailsRoutes = class VideosThumbnailsRoutes {
    initRoutes() {
        this.router.post(`${this.path}`, _authmiddleware.default, (0, _validationmiddleware.default)(_videosthumbnaildto.AddThumnnailDto, 'body'), _videosthumbnailcontroller.VideosThumbnailsController.addVideoThumbnail);
        this.router.get(`${this.path}/video/:videoId`, _authmiddleware.default, _videosthumbnailcontroller.VideosThumbnailsController.getVideoThumbnails);
        this.router.delete(`${this.path}/:id`, _authmiddleware.default, _videosthumbnailcontroller.VideosThumbnailsController.deleteVideoThumbnail);
        this.router.put(`${this.path}/:id`, _authmiddleware.default, (0, _validationmiddleware.default)(_videosthumbnaildto.UpdateThumnnailDto, 'body'), _videosthumbnailcontroller.VideosThumbnailsController.updateVideoThumbnail);
    }
    constructor(){
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "path", '/videos/thumbnails');
        this.initRoutes();
    }
};

//# sourceMappingURL=videos.thumnail.routes.js.map