import { ENUM } from 'sequelize';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { VideosModel } from './videos.model';

export class VideosSourceModel extends Model {}
export default function (sequelize: Sequelize) {
  VideosSourceModel.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      videoId: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      source: {
        allowNull: false,
        type: DataTypes.TEXT('long'),
      },
      type: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
      status: {
        allowNull: true,
        type: ENUM('active', 'inactive', 'deleted'),
        defaultValue: 'active',
      },
      quality: {
        allowNull: true,
        type: DataTypes.STRING(45),
        defaultValue: '720p',
      },
      language: {
        allowNull: true,
        type: DataTypes.STRING(45),
        defaultValue: 'en',
      },
    },
    {
      tableName: 'videos_source',
      sequelize,
      createdAt: false,
      updatedAt: false,
    },
  );

  VideosSourceModel.sync({ alter: true });
  return VideosSourceModel;
}
