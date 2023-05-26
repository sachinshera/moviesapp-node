"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return GenresAssocController;
    }
});
const _genresassocservice = _interop_require_default(require("../../services/genres/genres.assoc.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let GenresAssocController = class GenresAssocController {
    static async createGenresAssoc(req, res) {
        const { movies_series_id , genreId , type  } = req.body;
        try {
            const genresAssoc = await _genresassocservice.default.createGenresAssoc(movies_series_id, genreId, type);
            res.status(201).json({
                success: true,
                data: genresAssoc
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        }
    }
    static async getAllGenresAssoc(req, res) {
        try {
            const genresAssoc = await _genresassocservice.default.getAllGenresAssoc();
            res.status(200).json(genresAssoc);
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        }
    }
    static async getGenresAssocById(req, res) {
        const { id  } = req.params;
        try {
            const genresAssoc = await _genresassocservice.default.getGenresAssocById(id);
            if (!genresAssoc) {
                return res.status(404).json({
                    success: false,
                    message: 'GenresAssoc not found'
                });
            }
            res.status(200).json({
                success: true,
                data: genresAssoc
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        }
    }
    static async updateGenresAssoc(req, res) {
        const { id  } = req.params;
        const { movies_series_id , genreId , type  } = req.body;
        try {
            const genresAssoc = await _genresassocservice.default.updateGenresAssoc(id, movies_series_id, genreId, type);
            if (!genresAssoc) {
                return res.status(404).json({
                    success: false,
                    message: 'GenresAssoc not found'
                });
            }
            res.status(200).json({
                success: true,
                data: genresAssoc
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        }
    }
    static async deleteGenresAssoc(req, res) {
        const { id  } = req.params;
        try {
            const genresAssoc = await _genresassocservice.default.deleteGenresAssoc(id);
            if (!genresAssoc) {
                return res.status(404).json({
                    success: false,
                    message: 'GenresAssoc not found'
                });
            }
            res.status(200).json({
                success: true,
                message: 'GenresAssoc deleted successfully',
                data: genresAssoc
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        }
    }
    static async getAllByGenreid(req, res) {
        try {
            const { id  } = req.params;
            const genresAssoc = await _genresassocservice.default.getAllByGenreId(id);
            if (!genresAssoc) {
                return res.status(404).json({
                    success: false,
                    message: 'GenresAssoc not found'
                });
            }
            res.status(200).json(genresAssoc);
        } catch (err) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
                error: err.message
            });
        }
    }
};

//# sourceMappingURL=genres.assoc.controller.js.map