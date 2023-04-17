import SessionTokenModel from './../models/session.token.model';
import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import UserModel from '@models/users.model';
import { logger } from '@utils/logger';
import AdminUserModel from '@/models/admin.user.model';
import VideosModel from '@/models/videos/videos.model';
import VideosThumbnailsModel from '@/models/videos/videos.thumnails.model';
import VideosSourceModel from '@/models/videos/video.souce.model';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT as any,
  timezone: '+5:30',
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
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default DB;