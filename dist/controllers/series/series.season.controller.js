"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SeriesSeasonController", {
    enumerable: true,
    get: function() {
        return SeriesSeasonController;
    }
});
const _seriesseasonservice = require("../../services/series/series.season.service");
let SeriesSeasonController = class SeriesSeasonController {
    static async addSeason(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const addSeason = await _seriesseasonservice.SeriesSeasonService.addSeason(seriesId, req.body);
            return res.status(200).json(addSeason);
        } catch (err) {
            console.log(err);
            if (err.message == 'Series not found') {
                res.status(400).json({
                    message: 'Series not found'
                });
            }
            if (err.message == 'Season already exists') {
                res.status(400).json({
                    message: 'Season already exists'
                });
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }
    static async getAllSeasons(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const getAllSeasons = await _seriesseasonservice.SeriesSeasonService.getAllSeasons(seriesId);
            res.send(getAllSeasons);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getSeasonById(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const getSeasonById = await _seriesseasonservice.SeriesSeasonService.getSeasonById(seriesId, seasonId);
            res.send(getSeasonById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async updateSeasonById(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const updateSeasonById = await _seriesseasonservice.SeriesSeasonService.updateSeason(seriesId, seasonId, req.body);
            res.send(updateSeasonById);
        } catch (err) {
            console.log(err);
            if (err.message == 'Season does not exist') {
                res.status(400).json({
                    message: 'Season does not exist'
                });
            } else {
                res.status(500).send('Internal Server Error');
            }
        }
    }
    static async deleteSeasonById(req, res) {
        try {
            const seriesId = req.params.seriesId;
            const seasonId = req.params.seasonId;
            const deleteSeasonById = await _seriesseasonservice.SeriesSeasonService.deleteSeason(seriesId, seasonId);
            res.status(200).json({
                message: 'Season deleted successfully'
            });
        } catch (err) {
            res.status(404).send('Failed to delete season');
        }
    }
};

//# sourceMappingURL=series.season.controller.js.map