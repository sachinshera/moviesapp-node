import { ENUM } from 'sequelize';
import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

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
        type: DataTypes.STRING(45),
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      tags: {
        allowNull: false,
        type: DataTypes.STRING(255),
        unique: false,
      },
      status: {
        allowNull: false,
        type: ENUM('active', 'inactive', 'deleted'),
        unique: false,
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
      indexes: [
        {
          unique: false,
          fields: ['title'],
        },
        {
          unique: false,
          fields: ['tags'],
        },
        {
          unique: false,
          fields: ['description'],
        },
      ],
    },
  );

  VideosModel.sync({ alter: true });

  return VideosModel;
}
