"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SeriesController", {
    enumerable: true,
    get: function() {
        return SeriesController;
    }
});
const _categoryassocservice = _interop_require_default(require("../../services/category/category.assoc.service"));
const _genresassocservice = _interop_require_default(require("../../services/genres/genres.assoc.service"));
const _seriesservice = require("../../services/series/series.service");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let SeriesController = class SeriesController {
    static async addSeries(req, res) {
        try {
            const addSeries = await _seriesservice.SeriesService.createSeries(req.body);
            res.send(addSeries);
        } catch (err) {
            if (err.message == 'Series already exists') {
                res.status(400).json({
                    message: 'Series already exists'
                });
            }
            res.status(500).send('Internal Server Error');
        }
    }
    static async getAllSeries(req, res) {
        try {
            const limit = req.query.limit ? parseInt(req.query.limit) : 10;
            const offset = req.query.offset ? parseInt(req.query.offset) : 0;
            const q = req.query.q ? req.query.q : '';
            const date = req.query.date ? req.query.date : '';
            const getAllSeries = await _seriesservice.SeriesService.getAllSeries(limit, offset, q, date);
            res.send(getAllSeries);
        } catch (err) {
            console.log('err', err);
            res.status(500).send('Internal Server Error');
        }
    }
    static async getSeriesById(req, res) {
        try {
            const getSeriesById = await _seriesservice.SeriesService.getSeriesById(req.params.id);
            res.send(getSeriesById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async updateSeriesById(req, res) {
        try {
            const updateSeriesById = await _seriesservice.SeriesService.updateSeries(req.params.id, req.body);
            res.send(updateSeriesById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteSeriesById(req, res) {
        try {
            const deleteSeriesById = await _seriesservice.SeriesService.deleteSeries(req.params.id);
            res.status(200).json({
                message: 'series deleted successfully'
            });
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getSeriesByGenreId(req, res) {
        try {
            const getSeriesByGenreId = await _genresassocservice.default.getSeriesByGenreId(req.params.id);
            res.send(getSeriesByGenreId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getSeriesByCategoryId(req, res) {
        try {
            const getSeriesByCategoryId = await _categoryassocservice.default.getSeriesByCategoryId(req.params.id);
            res.send(getSeriesByCategoryId);
        } catch (err) {
            console.log('err', err);
            res.status(500).send('Internal Server Error');
        }
    }
};

//# sourceMappingURL=series.controller.js.map