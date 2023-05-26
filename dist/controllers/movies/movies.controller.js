"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MoviesController;
    }
});
const _categoryassocservice = _interop_require_default(require("../../services/category/category.assoc.service"));
const _genresassocservice = _interop_require_default(require("../../services/genres/genres.assoc.service"));
const _moviesservice = _interop_require_default(require("../../services/movies/movies.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let MoviesController = class MoviesController {
    async addMovie(req, res) {
        try {
            const movie = await _moviesservice.default.addMovie(req.body);
            res.status(200).json(movie);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
    async getAllMovies(req, res) {
        try {
            const movies = await _moviesservice.default.getAllMovies();
            res.status(200).json(movies);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
    async getMovieById(req, res) {
        try {
            const movie = await _moviesservice.default.getMovieById(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
    async updateMovie(req, res) {
        try {
            const movie = await _moviesservice.default.updateMovie(req.params.id, req.body);
            res.status(200).json(movie);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
    async deleteMovie(req, res) {
        try {
            const movie = await _moviesservice.default.deleteMovie(req.params.id);
            res.status(200).json(movie);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
    async getMoviesByGenresId(req, res) {
        try {
            let id = req.params.id;
            const movies = await _genresassocservice.default.getMoviesByGenreId(id);
            res.status(200).json(movies);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
    async getMoviesByCategoryId(req, res) {
        try {
            let id = req.params.id;
            const movies = await _categoryassocservice.default.getMoviesByCategoryId(id);
            res.status(200).json(movies);
        } catch (error) {
            if (error.message) {
                res.status(400).json({
                    message: error.message
                });
            } else {
                res.status(500).json({
                    message: 'Internal server error'
                });
            }
        }
    }
};

//# sourceMappingURL=movies.controller.js.map