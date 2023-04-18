import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class MoviesModel extends Model {}

export default function (sequelize: Sequelize) {
  MoviesModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(255),
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      region: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      language: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      genre: {
        type: DataTypes.STRING(255),
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
        allowNull: true,
      },
      video_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    },
    {
      tableName: 'movies',
      sequelize,
      createdAt: true,
      updatedAt: true,
    },
  );

  return MoviesModel;
}
