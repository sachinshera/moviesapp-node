import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

export class SeriesSeasonVideosModel extends Model {
  public id!: number;
  public series_id!: number;
  public season_id!: number;
  public video!: string;
  public status!: boolean;
}

export default function (sequelize: Sequelize) {
  SeriesSeasonVideosModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.STRING(45),
      },
      series_id: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      season_id: {
        allowNull: false,
        type: DataTypes.STRING(45),
      },
      video: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      tableName: 'series_season_videos',
      sequelize,
      createdAt: true,
      updatedAt: true,
    },
  );

  return SeriesSeasonVideosModel;
}
