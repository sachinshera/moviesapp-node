import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class CategoryModel extends Model {
  id: string;
  name: string;
}

export default function (sequelize: Sequelize) {
  CategoryModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(20),
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
    },
    {
      tableName: 'categories',
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

  CategoryModel.sync;

  return CategoryModel;
}
