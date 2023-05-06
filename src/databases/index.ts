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
import GenresModel from '@/models/genres.model';
import TrailerModel from '@/models/trailer/trailer.model';
import CategoryAssocModel from '@/models/category/category.assoc.model';
const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: DB_PORT as any,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
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
  SeriesSeasonVideosModel: SeriesSeasonVideosModel(sequelize),
  MoviesBannerModel: MoviesBannerModel(sequelize),
  SeriesSeasonsModel: SeriesSeasonsModel(sequelize),
  SeriesModel: SeriesModel(sequelize),
  CategoryModel: CategoryModel(sequelize),
  GenresModel: GenresModel(sequelize),
  TrailerModel: TrailerModel(sequelize),
  CategoryAssocModel: CategoryAssocModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

logger.info('Database connected');

DB.VideosModel.hasMany(DB.VideosSourceModel, {
  as: 'sources',
  foreignKey: 'video_id',
});

DB.VideosModel.hasMany(DB.VideosThumbnailsModel, {
  as: 'thumbnails',
  foreignKey: 'video_id',
});

// set associations series , series seasons , series season videos

DB.SeriesModel.hasMany(DB.SeriesSeasonsModel, {
  as: 'seasons',
  foreignKey: 'series_id',
});

DB.SeriesSeasonsModel.hasMany(DB.SeriesSeasonVideosModel, {
  as: 'episodes',
  foreignKey: 'season_id',
});

DB.MoviesModel.hasMany(DB.VideosModel, {
  as: 'videos',
  foreignKey: 'id',
  sourceKey: 'video_id',
});

DB.MoviesModel.hasMany(DB.TrailerModel, {
  as: 'trailers',
  foreignKey: 'movies_series_id',
});

DB.SeriesModel.hasMany(DB.TrailerModel, {
  as: 'trailers',
  foreignKey: 'movies_series_id',
});

// set associations movies , movies banner , video
DB.MoviesModel.hasMany(DB.MoviesBannerModel, {
  as: 'banners',
  foreignKey: 'movie_id',
});

//SeriesSeasonVideosModel and VideosModel are same table
DB.SeriesSeasonVideosModel.hasMany(DB.VideosModel, {
  as: 'episodesDetails',
  foreignKey: 'id',
  sourceKey: 'video',
});

export default DB;
