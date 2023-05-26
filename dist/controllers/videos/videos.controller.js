"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideosController", {
    enumerable: true,
    get: function() {
        return VideosController;
    }
});
const _videosservice = require("../../services/videos/videos.service");
let VideosController = class VideosController {
    static async addVideos(req, res) {
        try {
            const addVideos = await _videosservice.VideosService.addVideos(req.body);
            if (addVideos == 'videos already exist') {
                res.status(400).json({
                    message: 'videos already exist'
                });
            }
            res.send(addVideos);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getAllVideos(req, res) {
        try {
            const getAllVideos = await _videosservice.VideosService.getVideos();
            res.send(getAllVideos);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getVideosById(req, res) {
        try {
            const getVideosById = await _videosservice.VideosService.getVideosById(req.params.id);
            res.send(getVideosById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteVideosById(req, res) {
        try {
            const deleteVideosById = await _videosservice.VideosService.deleteVideos(req.params.id);
            res.status(200).json({
                message: 'videos deleted successfully'
            });
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async addVideosSource(req, res) {
        try {
            const addVideosSource = await _videosservice.VideosService.addVideosSource(req.body);
            if (addVideosSource == 'invalid video id') {
                res.status(400).json({
                    message: 'invalid video id'
                });
            } else if (addVideosSource == 'videos source already exist') {
                res.status(400).json({
                    message: 'videos source already exist'
                });
            } else {
                res.status(200).send(addVideosSource);
            }
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getVideosSourceById(req, res) {
        try {
            const getVideosSourceById = await _videosservice.VideosService.getVideosSourceByVideoId(req.params.id);
            res.send(getVideosSourceById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getSourceById(req, res) {
        try {
            const getSourceById = await _videosservice.VideosService.getSourceById(req.params.id);
            res.send(getSourceById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
};

//# sourceMappingURL=videos.controller.js.map