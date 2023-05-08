import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class GenresAssocModel extends Model {
  id: string;
  movies_series_id: string;
  genreId: string;
  type: string;
  status!: boolean;
}

export default function (sequelize: Sequelize) {
  GenresAssocModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false,
      },
      movies_series_id: {
        allowNull: false,
        type: DataTypes.STRING(45),
        unique: false,
      },
      genreId: {
        allowNull: true,
        type: DataTypes.STRING(45),
        unique: false,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: true,
      },
    },
    {
      tableName: 'genres_assoc',
      sequelize,
      createdAt: true,
      updatedAt: true,
      underscored: true,
    },
  );

  GenresAssocModel.sync({
    alter: true,
  });

  return GenresAssocModel;
}
