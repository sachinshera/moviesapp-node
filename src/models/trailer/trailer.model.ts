import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class TrailerModel extends Model {
  public id!: number;
  public movies_series_id!: string;
  public url!: string;
  public quality!: string;
  public status!: boolean;
}

export default function (sequelize: Sequelize) {
  TrailerModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      movies_series_id: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      url: {
        allowNull: true,
        type: DataTypes.TEXT('long'),
      },
      quality: {
        allowNull: true,
        type: DataTypes.ENUM('SD', 'HD', '2K', '4K', 'auto'),
        defaultValue: 'auto',
      },
      status: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      tableName: 'trailers',
      sequelize,
      createdAt: true,
      updatedAt: true,
    },
  );

  return TrailerModel;
}
