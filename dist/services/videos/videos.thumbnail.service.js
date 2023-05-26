"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VideosThumbnailsService;
    }
});
const _videosmodel = require("../../models/videos/videos.model");
const _videosthumnailsmodel = require("../../models/videos/videos.thumnails.model");
const _nanoid = require("nanoid");
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
let VideosThumbnailsService = class VideosThumbnailsService {
    static async addVideoThumbnail(data) {
        const video = await _videosmodel.VideosModel.findOne({
            where: {
                id: data.video_id
            }
        });
        if (video) {
            const existThumbnail = await _videosthumnailsmodel.VideosThumbnailsModel.findOne({
                where: {
                    videoId: data.video_id,
                    thumbnail: data.thumbnail
                }
            });
            if (existThumbnail) {
                throw new Error('Thumbnail already exist');
            }
            const videoThumbnail = await _videosthumnailsmodel.VideosThumbnailsModel.create(_object_spread({
                id: (0, _nanoid.nanoid)(),
                videoId: data.video_id,
                status: data.status ? data.status.status : 'active'
            }, data));
            return videoThumbnail;
        } else {
            throw new Error('Video not found');
        }
    }
    static async getVideoThumbnails(videoId) {
        const video = await _videosmodel.VideosModel.findOne({
            where: {
                id: videoId
            }
        });
        if (video) {
            const videoThumbnails = await _videosthumnailsmodel.VideosThumbnailsModel.findAll({
                where: {
                    videoId: videoId
                }
            });
            return videoThumbnails;
        } else {
            throw new Error('Video not found');
        }
    }
    static async getVideoThumbnailById(id) {
        const videoThumbnail = await _videosthumnailsmodel.VideosThumbnailsModel.findOne({
            where: {
                id: id
            }
        });
        return videoThumbnail;
    }
    static async deleteVideoThumbnailById(id) {
        const videoThumbnail = await _videosthumnailsmodel.VideosThumbnailsModel.findOne({
            where: {
                id: id
            }
        });
        if (videoThumbnail) {
            await _videosthumnailsmodel.VideosThumbnailsModel.destroy({
                where: {
                    id: id
                }
            });
            return videoThumbnail;
        } else {
            throw new Error('Video thumbnail not found');
        }
    }
    static async updateVideoThumbnailById(id, data) {
        const videoThumbnail = await _videosthumnailsmodel.VideosThumbnailsModel.findOne({
            where: {
                id: id
            }
        });
        if (videoThumbnail) {
            await _videosthumnailsmodel.VideosThumbnailsModel.update(_object_spread({}, data), {
                where: {
                    id: id
                }
            });
            return videoThumbnail;
        } else {
            throw new Error('Video thumbnail not found');
        }
    }
};

//# sourceMappingURL=videos.thumbnail.service.js.map