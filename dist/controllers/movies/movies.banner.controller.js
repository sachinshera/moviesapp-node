"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MoviesBannerController;
    }
});
const _moviesbannerservice = _interop_require_default(require("../../services/movies/movies.banner.service"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let MoviesBannerController = class MoviesBannerController {
    async addMovieBanner(req, res) {
        try {
            const movieBanner = await _moviesbannerservice.default.addMovieBanner(req.body);
            res.status(200).json(movieBanner);
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
    async getAllMovieBanners(req, res) {
        try {
            const movieBanners = await _moviesbannerservice.default.getAllMovieBanners();
            res.status(200).json(movieBanners);
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
    async getMovieBannerById(req, res) {
        try {
            const movieBanner = await _moviesbannerservice.default.getMovieBannerById(req.params.id);
            res.status(200).json(movieBanner);
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
    async updateMovieBanner(req, res) {
        try {
            const data = req.body;
            const id = req.params.id;
            data.id = id;
            const movieBanner = await _moviesbannerservice.default.updateMovieBanner(data);
            res.status(200).json(movieBanner);
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
    async deleteMovieBanner(req, res) {
        try {
            const movieBanner = await _moviesbannerservice.default.deleteMovieBanner(req.params.id);
            res.status(200).json(movieBanner);
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

//# sourceMappingURL=movies.banner.controller.js.map