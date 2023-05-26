"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GenresController;
    }
});
const _genresservice = _interop_require_default(require("../../services/genres/genres.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let GenresController = class GenresController {
    static async createGenres(req, res) {
        try {
            const { name  } = req.body;
            const genres = await _genresservice.default.createGenres(name);
            res.status(201).json(genres);
        } catch (err) {
            if (err.message === 'Genres already exists') {
                res.status(409).json({
                    message: err.message
                });
            } else {
                res.status(500).json({
                    message: 'Something went wrong'
                });
            }
        }
    }
    static async getAllGenres(req, res) {
        const genres = await _genresservice.default.getAllGenres();
        res.status(200).json(genres);
    }
    static async getGenresById(req, res) {
        const { id  } = req.params;
        const genres = await _genresservice.default.getGenresById(id);
        if (genres) {
            res.status(200).json(genres);
        } else {
            res.status(404).json({
                message: 'Genres not found'
            });
        }
    }
    static async updateGenres(req, res) {
        try {
            const { id  } = req.params;
            const { name  } = req.body;
            const genres = await _genresservice.default.updateGenres(id, name);
            res.status(200).json(genres);
        } catch (err) {
            if (err.message === 'Genres already exists') {
                res.status(409).json({
                    message: err.message
                });
            } else {
                res.status(500).json({
                    message: 'Something went wrong'
                });
            }
        }
    }
    static async deleteGenres(req, res) {
        const { id  } = req.params;
        const isDeleted = await _genresservice.default.deleteGenres(id);
        if (isDeleted) {
            res.status(200).json({
                message: 'Genres deleted'
            });
        } else {
            res.status(404).json({
                message: 'Genres not found'
            });
        }
    }
};

//# sourceMappingURL=ganres.controller.js.map