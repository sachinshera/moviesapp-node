import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class SeriesSeasonsModel extends Model {
  public id!: number;
  public series_id!: number;
  public season!: number;
  public description!: string;
  public image!: string;
  public trailer!: string;
  public status!: boolean;
}

export default function (sequelize: Sequelize) {
  SeriesSeasonsModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      series_id: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      season: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING(255),
      },
      image: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      trailer: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'series_seasons',
      sequelize,
      createdAt: true,
      updatedAt: true,
      indexes: [
        {
          unique: false,
          fields: ['season'],
        },
      ],
    },
  );

  SeriesSeasonsModel.sync({ alter: true });

  return SeriesSeasonsModel;
}
