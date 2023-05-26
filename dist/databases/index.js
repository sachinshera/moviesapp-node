"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _sessiontokenmodel = _interop_require_default(require("../models/session.token.model"));
const _sequelize = _interop_require_default(require("sequelize"));
const _config = require("../config");
const _usersmodel = _interop_require_default(require("../models/users.model"));
const _logger = require("../utils/logger");
const _adminusermodel = _interop_require_default(require("../models/admin.user.model"));
const _videosmodel = _interop_require_default(require("../models/videos/videos.model"));
const _videosthumnailsmodel = _interop_require_default(require("../models/videos/videos.thumnails.model"));
const _videosoucemodel = _interop_require_default(require("../models/videos/video.souce.model"));
const _moviesmodel = _interop_require_default(require("../models/movies/movies.model"));
const _moviesbannermodel = _interop_require_default(require("../models/movies/movies.banner.model"));
const _seriesmodel = _interop_require_default(require("../models/series/series.model"));
const _seriesseasonsmodel = _interop_require_default(require("../models/series/series.seasons.model"));
const _seriesseasonvideosmodel = _interop_require_default(require("../models/series/series.season.videos.model"));
const _categorymodel = _interop_require_default(require("../models/category/category.model"));
const _genresmodel = _interop_require_default(require("../models/genres/genres.model"));
const _trailermodel = _interop_require_default(require("../models/trailer/trailer.model"));
const _categoryassocmodel = _interop_require_default(require("../models/category/category.assoc.model"));
const _genresassocmodel = _interop_require_default(require("../models/genres/genres.assoc.model"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const sequelize = new _sequelize.default.Sequelize(_config.DB_DATABASE, _config.DB_USER, _config.DB_PASSWORD, {
    dialect: 'postgres',
    host: _config.DB_HOST,
    port: _config.DB_PORT,
    define: {
        underscored: true,
        freezeTableName: false
    },
    pool: {
        min: 0,
        max: 10
    },
    logQueryParameters: _config.NODE_ENV === 'development',
    logging: (query, time)=>{
        _logger.logger.info(time + 'ms' + ' ' + query);
    },
    benchmark: true,
    set: {
        FOREIGN_KEY_CHECKS: 0,
        constraints: false
    }
});
sequelize.authenticate();
const DB = {
    Users: (0, _usersmodel.default)(sequelize),
    AdminUsers: (0, _adminusermodel.default)(sequelize),
    SessionTokenModel: (0, _sessiontokenmodel.default)(sequelize),
    VideosModel: (0, _videosmodel.default)(sequelize),
    VideosThumbnailsModel: (0, _videosthumnailsmodel.default)(sequelize),
    VideosSourceModel: (0, _videosoucemodel.default)(sequelize),
    MoviesModel: (0, _moviesmodel.default)(sequelize),
    SeriesModel: (0, _seriesmodel.default)(sequelize),
    SeriesSeasonVideosModel: (0, _seriesseasonvideosmodel.default)(sequelize),
    MoviesBannerModel: (0, _moviesbannermodel.default)(sequelize),
    SeriesSeasonsModel: (0, _seriesseasonsmodel.default)(sequelize),
    CategoryModel: (0, _categorymodel.default)(sequelize),
    GenresModel: (0, _genresmodel.default)(sequelize),
    TrailerModel: (0, _trailermodel.default)(sequelize),
    CategoryAssocModel: (0, _categoryassocmodel.default)(sequelize),
    GenresAssocModel: (0, _genresassocmodel.default)(sequelize),
    sequelize,
    Sequelize: _sequelize.default
};
_logger.logger.info('Database connected');
DB.VideosModel.hasMany(DB.VideosSourceModel, {
    as: 'sources',
    foreignKey: 'video_id',
    constraints: false
});
DB.VideosModel.hasMany(DB.VideosThumbnailsModel, {
    as: 'thumbnails',
    foreignKey: 'video_id',
    constraints: false
});
DB.SeriesModel.hasMany(DB.SeriesSeasonsModel, {
    as: 'seasons',
    foreignKey: 'series_id',
    constraints: false
});
DB.SeriesSeasonsModel.hasMany(DB.SeriesSeasonVideosModel, {
    as: 'episodes',
    foreignKey: 'season_id',
    constraints: false
});
DB.MoviesModel.hasMany(DB.VideosModel, {
    as: 'videos',
    foreignKey: 'id',
    sourceKey: 'video_id',
    constraints: false
});
DB.MoviesModel.hasMany(DB.TrailerModel, {
    as: 'trailers',
    foreignKey: 'movies_series_id',
    constraints: false
});
DB.SeriesModel.hasMany(DB.TrailerModel, {
    as: 'trailers',
    foreignKey: 'movies_series_id',
    constraints: false
});
DB.SeriesSeasonVideosModel.hasMany(DB.VideosModel, {
    as: 'episodesDetails',
    foreignKey: 'id',
    sourceKey: 'video',
    constraints: false
});
DB.GenresAssocModel.hasMany(DB.GenresModel, {
    as: 'genresDetails',
    foreignKey: 'id',
    sourceKey: 'genreId',
    foreignKeyConstraint: false,
    constraints: false
});
DB.GenresAssocModel.hasMany(DB.MoviesModel, {
    as: 'moviesDetails',
    foreignKey: 'id',
    sourceKey: 'movies_series_id',
    constraints: false
});
DB.GenresAssocModel.hasMany(DB.SeriesModel, {
    as: 'seriesDetails',
    foreignKey: 'id',
    sourceKey: 'movies_series_id',
    constraints: false
});
DB.CategoryAssocModel.hasMany(DB.CategoryModel, {
    as: 'categoryDetails',
    foreignKey: 'id',
    sourceKey: 'categoryId',
    constraints: false
});
DB.CategoryAssocModel.hasMany(DB.MoviesModel, {
    as: 'moviesDetails',
    sourceKey: 'series_movie_id',
    foreignKey: 'id',
    foreignKeyConstraint: false,
    constraints: false
});
DB.CategoryAssocModel.hasMany(DB.SeriesModel, {
    as: 'seriesDetails',
    sourceKey: 'series_movie_id',
    foreignKey: 'id',
    constraints: false
});
DB.MoviesModel.hasMany(DB.MoviesBannerModel, {
    as: 'banners',
    foreignKey: 'contentId',
    sourceKey: 'id',
    constraints: false
});
DB.SeriesModel.hasMany(DB.MoviesBannerModel, {
    as: 'banners',
    foreignKey: 'contentId',
    sourceKey: 'id',
    constraints: false
});
const _default = DB;

//# sourceMappingURL=index.js.map