import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class CategoryAssocModel extends Model {
  id: string;
  series_movie_id: string;
  status?: string;
  type: string;
}

export default function (sequelize: Sequelize) {
  CategoryAssocModel.init(
    {
      id: {
        type: DataTypes.STRING(40),
        unique: true,
        primaryKey: true,
      },
      series_movie_id: {
        type: DataTypes.STRING(40),
        unique: false,
        allowNull: false,
      },

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      type: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {
      tableName: 'categories_assoc',
      sequelize,
      createdAt: true,
      updatedAt: true,
    },
  );
  CategoryAssocModel.sync({
    alter: true,
  });
}
