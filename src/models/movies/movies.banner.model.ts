import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class MoviesBannerModel extends Model {}

export default function (sequelize: Sequelize) {
  MoviesBannerModel.init(
    {
      id: {
        unique: true,
        primaryKey: true,
        type: DataTypes.STRING(255),
      },
      contentId: {
        type: DataTypes.STRING(255),
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      url: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      quality: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: 'HD',
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
        allowNull: true,
      },
    },
    {
      tableName: 'banners',
      sequelize,
      createdAt: true,
      updatedAt: true,
    },
  );

  MoviesBannerModel.sync({
    alter: true,
  });

  return MoviesBannerModel;
}
