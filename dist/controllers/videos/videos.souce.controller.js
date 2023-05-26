"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideosSourceController", {
    enumerable: true,
    get: function() {
        return VideosSourceController;
    }
});
const _videossourceservice = require("../../services/videos/videos.source.service");
let VideosSourceController = class VideosSourceController {
    static async addVideosSource(req, res) {
        try {
            const addVideosSource = await _videossourceservice.VideosSoureService.addVideosSource(req.body);
            if (addVideosSource == 'invalid video id') {
                res.status(400).json({
                    message: 'invalid video id'
                });
            }
            res.send(addVideosSource);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteVideosSourceById(req, res) {
        try {
            const deleteVideosSourceById = await _videossourceservice.VideosSoureService.deleteVideosSource(req.params.id);
            res.status(200).json({
                message: 'video source deleted successfully'
            });
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async updateVideosSourceById(req, res) {
        try {
            const updateVideosSourceById = await _videossourceservice.VideosSoureService.updateVideosSource(req.params.id, req.body);
            res.status(200).json({
                message: 'video source updated successfully',
                data: updateVideosSourceById
            });
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getVideosSourceById(req, res) {
        try {
            const getVideosSourceById = await _videossourceservice.VideosSoureService.getVideosSourceByVideoId(req.params.id);
            res.send(getVideosSourceById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async changeStatus(req, res) {
        try {
            const changeStatus = await _videossourceservice.VideosSoureService.changeStatusVideosSource(req.params.id, req.body);
            res.status(200).json({
                message: 'video source status changed successfully',
                data: changeStatus
            });
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getSourceById(req, res) {
        try {
            const getSourceById = await _videossourceservice.VideosSoureService.getSourceById(req.params.id);
            res.send(getSourceById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
};

//# sourceMappingURL=videos.souce.controller.js.map