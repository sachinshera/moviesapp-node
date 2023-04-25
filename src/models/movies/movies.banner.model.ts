import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class MoviesBannerModel extends Model {}

export default function (sequelize: Sequelize) {
  MoviesBannerModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(255),
      },
      movie_id: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      banner_image: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
        allowNull: true,
      },
    },
    {
      tableName: 'movies_banner',
      sequelize,
      createdAt: true,
      updatedAt: true,
    },
  );

  return MoviesBannerModel;
}
