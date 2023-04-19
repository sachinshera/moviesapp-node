import { SeriesModel } from '@/models/series/series.model';
import { SeriesSeasonsModel } from '@/models/series/series.seasons.model';
import { nanoid } from 'nanoid';

export class SeriesSeasonService {
  // add new season
  public static async addSeason(seriesId: string, season: SeriesSeasonsModel) {
    try {
      // check if series exists
      const seriesExists = await SeriesModel.findOne({
        where: {
          id: seriesId,
        },
      });
      if (!seriesExists) {
        throw new Error('Series does not exist');
      }

      // check if season already exists
      const seasonExists = await SeriesSeasonsModel.findOne({
        where: {
          season: season.season,
        },
      });
      if (seasonExists) {
        throw new Error('Season already exists');
      }
      const id = nanoid();
      const newSeason = SeriesSeasonsModel.create({
        id: id,
        series_id: seriesId,
        ...season,
      });

      return newSeason;
    } catch (err) {
      throw err;
    }
  }

  // get all seasons

  public static async getAllSeasons(seriesId: string) {
    const seasons = await SeriesSeasonsModel.findAll({
      where: {
        series_id: seriesId,
      },
    });
    return seasons;
  }

  //   get season by id
  public static async getSeasonById(seriesId: string, seasonId: string) {
    const season = await SeriesSeasonsModel.findOne({
      where: {
        series_id: seriesId,
        id: seasonId,
      },
    });
    return season;
  }

  //   update season

  public static async updateSeason(seriesId: string, seasonId: string, season: SeriesSeasonsModel) {
    const seasonExists = await SeriesSeasonsModel.findOne({
      where: {
        series_id: seriesId,
        id: seasonId,
      },
    });
    if (!seasonExists) {
      throw new Error('Season does not exist');
    }
    const updatedSeason = await SeriesSeasonsModel.update(
      {
        ...season,
      },
      {
        where: {
          series_id: seriesId,
          id: seasonId,
        },
      },
    );

    // return updated season
    const updatedSeasonData = await SeriesSeasonsModel.findOne({
      where: {
        series_id: seriesId,
        id: seasonId,
      },
    });

    return updatedSeasonData;
  }

  //   //   delete season

  public static async deleteSeason(seriesId: string, seasonId: string) {
    const seasonExists = await SeriesSeasonsModel.findOne({
      where: {
        series_id: seriesId,
        id: seasonId,
      },
    });
    if (!seasonExists) {
      throw new Error('Season does not exist');
    }
    const deletedSeason = await SeriesSeasonsModel.destroy({
      where: {
        series_id: seriesId,
        id: seasonId,
      },
    });
    return 'Season deleted successfully';
  }
}
