"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideosSoureService", {
    enumerable: true,
    get: function() {
        return VideosSoureService;
    }
});
const _videosoucemodel = require("../../models/videos/video.souce.model");
const _videosmodel = require("../../models/videos/videos.model");
const _nanoid = require("nanoid");
let VideosSoureService = class VideosSoureService {
    static async addVideosSource(data) {
        const checkVideo = await _videosmodel.VideosModel.findOne({
            where: {
                id: data.videos_id
            }
        });
        if (!checkVideo) {
            return 'invalid video id';
        }
        const checkExist = await _videosoucemodel.VideosSourceModel.findOne({
            where: {
                videoId: data.videos_id,
                source: data.source
            }
        });
        if (checkExist) {
            return 'videos source already exist';
        }
        const videosSource = await _videosoucemodel.VideosSourceModel.create({
            id: (0, _nanoid.nanoid)(),
            videoId: data.videos_id,
            source: data.source,
            type: data.type ? data.type : 'video',
            status: data.status ? data.status : 'active',
            quality: data.quality ? data.quality : '720p',
            language: data.language ? data.language : 'en'
        });
        console.log(videosSource);
        return videosSource;
    }
    static async updateVideosSource(id, data) {
        const videosSource = await _videosoucemodel.VideosSourceModel.update({
            videoId: data.videoId,
            source: data.source,
            type: data.type ? data.type : 'video',
            status: data.status ? data.status : 'active',
            quality: data.quality ? data.quality : '720p',
            language: data.language ? data.language : 'en'
        }, {
            where: {
                id: id
            }
        });
        return videosSource;
    }
    static async changeStatusVideosSource(id, data) {
        const videosSource = await _videosoucemodel.VideosSourceModel.update({
            status: data.status
        }, {
            where: {
                id: id
            }
        });
        return videosSource;
    }
    static async getVideosSourceByVideoId(id) {
        const videosSource = await _videosoucemodel.VideosSourceModel.findAll({
            where: {
                video_id: id
            }
        });
        return videosSource;
    }
    static async getSourceById(id) {
        const source = await _videosoucemodel.VideosSourceModel.findOne({
            where: {
                id: id
            }
        });
        return source;
    }
    static async deleteVideosSource(id) {
        const videosSource = await _videosoucemodel.VideosSourceModel.destroy({
            where: {
                id: id
            }
        });
        return videosSource;
    }
};

//# sourceMappingURL=videos.source.service.js.map