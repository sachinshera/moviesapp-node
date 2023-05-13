import SessionTokenModel from './../models/session.token.model';
import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import AdminUserModel from '@/models/admin.user.model';
import VideosModel from '@/models/videos/videos.model';
import VideosThumbnailsModel from '@/models/videos/videos.thumnails.model';
import VideosSourceModel from '@/models/videos/video.souce.model';
import MoviesModel from '@/models/movies/movies.model';
import MoviesBannerModel from '@/models/movies/movies.banner.model';
import SeriesModel from '@/models/series/series.model';
import SeriesSeasonsModel from '@/models/series/series.seasons.model';
import SeriesSeasonVideosModel from '@/models/series/series.season.videos.model';
import CategoryModel from '@/models/category/category.model';
import GenresModel from '@/models/genres/genres.model';
import TrailerModel from '@/models/trailer/trailer.model';
import CategoryAssocModel from '@/models/category/category.assoc.model';
import GenresAssocModel from '@/models/genres/genres.assoc.model';
const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT as any,
  define: {
    underscored: true,
    freezeTableName: false,
  },
  pool: {
    min: 0,
    max: 10,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
  set: {
    FOREIGN_KEY_CHECKS: 0,
    constraints: false,
  },
});

sequelize.authenticate();

const DB = {
  Users: UserModel(sequelize),
  AdminUsers: AdminUserModel(sequelize),
  SessionTokenModel: SessionTokenModel(sequelize),
  VideosModel: VideosModel(sequelize),
  VideosThumbnailsModel: VideosThumbnailsModel(sequelize),
  VideosSourceModel: VideosSourceModel(sequelize),
  MoviesModel: MoviesModel(sequelize),
  SeriesModel: SeriesModel(sequelize),
  SeriesSeasonVideosModel: SeriesSeasonVideosModel(sequelize),
  MoviesBannerModel: MoviesBannerModel(sequelize),
  SeriesSeasonsModel: SeriesSeasonsModel(sequelize),
  CategoryModel: CategoryModel(sequelize),
  GenresModel: GenresModel(sequelize),
  TrailerModel: TrailerModel(sequelize),
  CategoryAssocModel: CategoryAssocModel(sequelize),
  GenresAssocModel: GenresAssocModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

logger.info('Database connected');

DB.VideosModel.hasMany(DB.VideosSourceModel, {
  as: 'sources',
  foreignKey: 'video_id',
  constraints: false,
});
// @ts-ignore
DB.VideosModel.hasMany(DB.VideosThumbnailsModel, {
  as: 'thumbnails',
  foreignKey: 'video_id',
  constraints: false,
});

// set associations series , series seasons , series season videos
// @ts-ignore
DB.SeriesModel.hasMany(DB.SeriesSeasonsModel, {
  as: 'seasons',
  foreignKey: 'series_id',
  constraints: false,
});
// @ts-ignore
DB.SeriesSeasonsModel.hasMany(DB.SeriesSeasonVideosModel, {
  as: 'episodes',
  foreignKey: 'season_id',
  constraints: false,
});
// @ts-ignore
DB.MoviesModel.hasMany(DB.VideosModel, {
  as: 'videos',
  foreignKey: 'id',
  sourceKey: 'video_id',
  constraints: false,
});
// @ts-ignore
DB.MoviesModel.hasMany(DB.TrailerModel, {
  as: 'trailers',
  foreignKey: 'movies_series_id',
  constraints: false,
});
// @ts-ignore
DB.SeriesModel.hasMany(DB.TrailerModel, {
  as: 'trailers',
  foreignKey: 'movies_series_id',
  constraints: false,
});
// @ts-ignore
// set associations movies , movies banner , video

// @ts-ignore
//SeriesSeasonVideosModel and VideosModel are same table
DB.SeriesSeasonVideosModel.hasMany(DB.VideosModel, {
  as: 'episodesDetails',
  foreignKey: 'id',
  sourceKey: 'video',
  constraints: false,
});
// @ts-ignore
DB.GenresAssocModel.hasMany(DB.GenresModel, {
  as: 'genresDetails',
  foreignKey: 'id',
  sourceKey: 'genreId',
  foreignKeyConstraint: false,
  constraints: false,
});
// @ts-ignore
DB.GenresAssocModel.hasMany(DB.MoviesModel, {
  as: 'moviesDetails',
  foreignKey: 'id',
  sourceKey: 'movies_series_id',
  constraints: false,
});
// @ts-ignore
DB.GenresAssocModel.hasMany(DB.SeriesModel, {
  as: 'seriesDetails',
  foreignKey: 'id',
  sourceKey: 'movies_series_id',
  constraints: false,
});

// category model and assoc model
// @ts-ignore
DB.CategoryAssocModel.hasMany(DB.CategoryModel, {
  as: 'categoryDetails',
  foreignKey: 'id',
  sourceKey: 'categoryId',
  constraints: false,
});
// @ts-ignore
DB.CategoryAssocModel.hasMany(DB.MoviesModel, {
  as: 'moviesDetails',
  sourceKey: 'series_movie_id',
  foreignKey: 'id',
  foreignKeyConstraint: false,
  constraints: false,
});

// @ts-ignore
DB.CategoryAssocModel.hasMany(DB.SeriesModel, {
  as: 'seriesDetails',
  sourceKey: 'series_movie_id',
  foreignKey: 'id',
  constraints: false,
});

DB.MoviesModel.hasMany(DB.MoviesBannerModel, {
  as: 'banners',
  foreignKey: 'contentId',
  sourceKey: 'id',
  constraints: false,
});

DB.SeriesModel.hasMany(DB.MoviesBannerModel, {
  as: 'banners',
  foreignKey: 'contentId',
  sourceKey: 'id',
  constraints: false,
});

export default DB;
