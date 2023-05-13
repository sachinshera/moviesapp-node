import { SeriesModel } from '@/models/series/series.model';
import { nanoid } from 'nanoid';
import { Op } from 'sequelize';

export class SeriesService {
  public static async createSeries(series: SeriesModel) {
    // check if series already exists
    const seriesExists = await SeriesModel.findOne({
      where: {
        name: series.name,
      },
    });
    if (seriesExists) {
      throw new Error('Series already exists');
    }
    const id = nanoid();
    const newSeries = new SeriesModel({
      id,
      ...series,
    });
    await newSeries.save();
    return newSeries;
  }

  //   get all series
  public static async getAllSeries(limit: number, offset: number, q: string, date: string) {
    const series = await SeriesModel.findAll({
      limit,
      offset,
      where: {
        name: {
          [Op.like]: `%${q}%`,
        },
      },
      include: [
        {
          association: 'seasons',
          include: [
            {
              association: 'episodes',
              include: [
                {
                  association: 'episodesDetails',
                  include: [
                    {
                      association: 'sources',
                    },
                    {
                      association: 'thumbnails',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          association: 'trailers',
        },
        {
          association: 'banners',
        },
      ],
    });
    return series;
  }

  //   get series by id
  public static async getSeriesById(id: string) {
    const series = await SeriesModel.findOne({
      where: {
        id,
      },
      include: [
        {
          association: 'seasons',
          include: [
            {
              association: 'episodes',
              include: [
                {
                  association: 'episodesDetails',
                  include: [
                    {
                      association: 'sources',
                    },
                    {
                      association: 'thumbnails',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          association: 'trailers',
        },
        {
          association: 'banners',
        },
      ],
    });
    return series;
  }

  //   //   update series

  public static async updateSeries(id: string, series: SeriesModel) {
    const updatedSeries = await SeriesModel.update(series, {
      where: {
        id,
      },
    });
    // return updatedSeries;

    const seriesById = await SeriesModel.findOne({
      where: {
        id,
      },
    });
    return seriesById;
  }

  //   //   delete series

  public static async deleteSeries(id: string) {
    const deletedSeries = await SeriesModel.destroy({
      where: {
        id,
      },
    });
    return 'Series deleted successfully';
  }
}
