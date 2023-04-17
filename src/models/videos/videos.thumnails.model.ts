import { ENUM } from 'sequelize';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class VideosThumbnailsModel extends Model {}

export default function (sequelize: Sequelize) {
  VideosThumbnailsModel.init(
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
      thumbnail: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      status: {
        allowNull: false,
        type: ENUM('active', 'inactive', 'deleted'),
      },
      quality: {
        allowNull: false,
        type: ENUM('default', 'medium', 'high', 'standard', 'maxres'),
        defaultValue: 'default',
      },
      language: {
        allowNull: true,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'videos_thumbnails',
      sequelize,
      createdAt: false,
      updatedAt: false,
    },
  );

  VideosThumbnailsModel.sync({ alter: true });

  return VideosThumbnailsModel;
}
