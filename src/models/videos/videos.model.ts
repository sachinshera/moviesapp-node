import { ENUM } from 'sequelize';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { VideosSourceModel } from './video.souce.model';

export class VideosModel extends Model {}

export default function (sequelize: Sequelize) {
  VideosModel.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      title: {
        allowNull: false,
        type: DataTypes.TEXT('long'),
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT('long'),
      },
      tags: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      status: {
        allowNull: false,
        type: ENUM('active', 'inactive', 'deleted'),
      },
      views: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      language: {
        allowNull: false,
        type: DataTypes.STRING(45),
        unique: false,
      },
    },
    {
      tableName: 'videos',
      sequelize,
      createdAt: false,
      updatedAt: false,
    },
  );

  VideosModel.sync({ alter: true });

  return VideosModel;
}
