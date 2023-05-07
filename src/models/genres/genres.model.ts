import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
export class GenresModel extends Model {
  public id!: string;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize) {
  GenresModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(20),
        unique: true,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
        unique: true,
      },
    },
    {
      tableName: 'genres',
      sequelize,
      createdAt: true,
      updatedAt: true,
      indexes: [
        {
          unique: true,
          fields: ['name'],
        },
      ],
    },
  );

  return GenresModel;
}
