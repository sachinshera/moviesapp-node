"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideosThumbnailsController", {
    enumerable: true,
    get: function() {
        return VideosThumbnailsController;
    }
});
const _videosthumbnailservice = _interop_require_default(require("../../services/videos/videos.thumbnail.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let VideosThumbnailsController = class VideosThumbnailsController {
    static async addVideoThumbnail(req, res) {
        try {
            const videoThumbnail = await _videosthumbnailservice.default.addVideoThumbnail(req.body);
            res.status(200).json(videoThumbnail);
        } catch (error) {
            if (error.message == 'Video not found') {
                res.status(404).json({
                    message: error.message
                });
            } else if (error.message == 'Thumbnail already exist') {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    static async getVideoThumbnails(req, res) {
        try {
            const videoId = req.params.videoId;
            const videoThumbnails = await _videosthumbnailservice.default.getVideoThumbnails(videoId);
            res.status(200).json(videoThumbnails);
        } catch (error) {
            if (error.message == 'Video not found') {
                res.status(404).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    static async deleteVideoThumbnail(req, res) {
        try {
            const id = req.params.id;
            const videoThumbnail = await _videosthumbnailservice.default.deleteVideoThumbnailById(id);
            res.status(200).json(videoThumbnail);
        } catch (error) {
            if (error.message == 'Video thumbnail not found') {
                res.status(404).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
    static async updateVideoThumbnail(req, res) {
        try {
            const id = req.params.id;
            const videoThumbnail = await _videosthumbnailservice.default.updateVideoThumbnailById(id, req.body);
            res.status(200).json(videoThumbnail);
        } catch (error) {
            if (error.message == 'Video thumbnail not found') {
                res.status(404).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: error.message
                });
            }
        }
    }
};

//# sourceMappingURL=videos.thumbnail.controller.js.map