"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideosService", {
    enumerable: true,
    get: function() {
        return VideosService;
    }
});
const _videosoucemodel = require("../../models/videos/video.souce.model");
const _videosmodel = require("../../models/videos/videos.model");
const _videosthumnailsmodel = require("../../models/videos/videos.thumnails.model");
const _nanoid = require("nanoid");
let VideosService = class VideosService {
    static async getVideos() {
        return await _videosmodel.VideosModel.findAll({
            include: [
                {
                    model: _videosoucemodel.VideosSourceModel,
                    as: 'sources'
                },
                {
                    model: _videosthumnailsmodel.VideosThumbnailsModel,
                    as: 'thumbnails'
                }
            ]
        });
    }
    static async addVideos(data) {
        try {
            const videosExist = await _videosmodel.VideosModel.findOne({
                where: {
                    title: data.title
                }
            });
            if (videosExist) {
                return 'videos already exist';
            }
            const videos = await _videosmodel.VideosModel.create({
                id: (0, _nanoid.nanoid)(),
                title: data.title,
                description: data.description,
                tags: data.tags,
                status: data.status ? data.status : 'active',
                language: data.language ? data.language : 'en'
            });
            return videos;
        } catch (err) {
            return err;
        }
    }
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
                video_id: data.videos_id,
                source: data.source
            }
        });
        if (checkExist) {
            return 'videos source already exist';
        }
        const videosSource = await _videosoucemodel.VideosSourceModel.create({
            id: (0, _nanoid.nanoid)(),
            video_id: data.videos_id,
            source: data.source,
            type: data.type ? data.type : 'video',
            status: data.status ? data.status : 'active',
            quality: data.quality ? data.quality : '720p',
            language: data.language ? data.language : 'en'
        });
        return videosSource;
    }
    static async addVideosThumbnails(data) {
        const videosThumbnails = await _videosthumnailsmodel.VideosThumbnailsModel.create({
            id: (0, _nanoid.nanoid)(),
            videoId: data.videoId,
            source: data.source,
            status: data.status ? data.status : 'active',
            language: data.language ? data.language : 'en'
        });
        return videosThumbnails;
    }
    static async deleteVideos(id) {
        const videos = await _videosmodel.VideosModel.destroy({
            where: {
                id: id
            }
        });
        return videos;
    }
    static async deleteVideosSource(id) {
        const videosSource = await _videosoucemodel.VideosSourceModel.destroy({
            where: {
                id: id
            }
        });
        return videosSource;
    }
    static async deleteVideosThumbnails(id) {
        const videosThumbnails = await _videosthumnailsmodel.VideosThumbnailsModel.destroy({
            where: {
                id: id
            }
        });
        return videosThumbnails;
    }
    static async updateVideos(id, data) {
        const videos = await _videosmodel.VideosModel.update({
            title: data.title,
            description: data.description,
            tags: data.tags,
            status: data.status ? data.status : 'active',
            language: data.language ? data.language : 'en'
        }, {
            where: {
                id: id
            }
        });
        return videos;
    }
    static async updateVideosThumbnails(id, data) {
        const videosThumbnails = await _videosthumnailsmodel.VideosThumbnailsModel.update({
            videoId: data.videoId,
            source: data.source,
            status: data.status ? data.status : 'active',
            language: data.language ? data.language : 'en'
        }, {
            where: {
                id: id
            }
        });
        return videosThumbnails;
    }
    static async changeStatusVideos(id, data) {
        const videos = await _videosmodel.VideosModel.update({
            status: data.status
        }, {
            where: {
                id: id
            }
        });
        return videos;
    }
    static async changeStatusVideosThumbnails(id, data) {
        const videosThumbnails = await _videosthumnailsmodel.VideosThumbnailsModel.update({
            status: data.status
        }, {
            where: {
                id: id
            }
        });
        return videosThumbnails;
    }
    static async getVideosById(id) {
        const videos = await _videosmodel.VideosModel.findOne({
            where: {
                id: id
            }
        });
        return videos;
    }
    static async getVideosSourceByVideoId(id) {
        const videosSource = await _videosoucemodel.VideosSourceModel.findAll({
            where: {
                video_id: id
            }
        });
        return videosSource;
    }
    static async getVideosThumbnailsByVideoId(id) {
        const videosThumbnails = await _videosthumnailsmodel.VideosThumbnailsModel.findAll({
            where: {
                videoId: id
            }
        });
        return videosThumbnails;
    }
    static async getSourceById(id) {
        const source = await _videosoucemodel.VideosSourceModel.findOne({
            where: {
                id: id
            }
        });
        return source;
    }
};

//# sourceMappingURL=videos.service.js.map