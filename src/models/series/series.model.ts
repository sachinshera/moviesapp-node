import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class SeriesModel extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public image!: string;
  public trailer!: string;
  public status!: boolean;
}

export default function (sequelize: Sequelize) {
  SeriesModel.init(
    {
      id: {
        unique: true,
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(500),
      },
      image: {
        allowNull: true,
        type: DataTypes.TEXT('long'),
      },
      trailer: {
        allowNull: true,
        type: DataTypes.TEXT('long'),
      },
      status: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'series',
      sequelize,
      createdAt: true,
      updatedAt: true,
      indexes: [
        {
          name: 'series_name',
          unique: true,
          fields: ['name'],
          type: 'FULLTEXT',
        },
        {
          name: 'series_description',
          unique: true,
          type: 'FULLTEXT',
          fields: ['description'],
        },
      ],
    },
  );

  SeriesModel.sync({
    alter: true,
  });

  return SeriesModel;
}
