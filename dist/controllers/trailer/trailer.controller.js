"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TrailerController", {
    enumerable: true,
    get: function() {
        return TrailerController;
    }
});
const _trailerservice = _interop_require_default(require("../../services/trailer/trailer.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let TrailerController = class TrailerController {
    static async getAllTrailers(req, res) {
        try {
            const getAllTrailers = await _trailerservice.default.getAllTrailers();
            res.send(getAllTrailers);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async createTrailer(req, res) {
        try {
            const data = req.body;
            const createTrailer = await _trailerservice.default.createTrailer(data);
            res.send(createTrailer);
        } catch (err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
    }
    static async getTrailerByMovieId(req, res) {
        try {
            const getTrailerByMovieId = await _trailerservice.default.getTrailerByMovieId(req.params.id);
            res.send(getTrailerByMovieId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async getTrailerBySeriesId(req, res) {
        try {
            const getTrailerBySeriesId = await _trailerservice.default.getTrailerBySeriesId(req.params.id);
            res.send(getTrailerBySeriesId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async updateTrailerByMovieId(req, res) {
        try {
            const updateTrailerByMovieId = await _trailerservice.default.updateTrailerByMovieId(req.params.id, req.body);
            res.send(updateTrailerByMovieId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async updateTrailerBySeriesId(req, res) {
        try {
            const updateTrailerBySeriesId = await _trailerservice.default.updateTrailerBySeriesId(req.params.id, req.body);
            res.send(updateTrailerBySeriesId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteTrailerByMovieId(req, res) {
        try {
            const deleteTrailerByMovieId = await _trailerservice.default.deleteTrailerByMovieId(req.params.id);
            res.send(deleteTrailerByMovieId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteTrailerBySeriesId(req, res) {
        try {
            const deleteTrailerBySeriesId = await _trailerservice.default.deleteTrailerBySeriesId(req.params.id);
            res.send(deleteTrailerBySeriesId);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
    static async deleteTrailerById(req, res) {
        try {
            const deleteTrailerById = await _trailerservice.default.deleteTrailerById(req.params.id);
            res.sendStatus(200).send(deleteTrailerById);
        } catch (err) {
            res.status(500).send('Internal Server Error');
        }
    }
};

//# sourceMappingURL=trailer.controller.js.map