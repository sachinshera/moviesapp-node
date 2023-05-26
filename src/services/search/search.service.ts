import { MoviesModel } from '@/models/movies/movies.model';
import { SeriesModel } from '@/models/series/series.model';
import { Op, Sequelize } from 'sequelize';

export default class SearchService {
  static async search(query: string) {
    if (query.length < 3) {
      // search for all movies and series
      const movies = await MoviesModel.findAll({
        include: [
          {
            association: 'banners',
            as: 'banners',
          },
          {
            association: 'videos',
            as: 'videos',
            include: [
              {
                association: 'sources',
                as: 'sources',
              },
              {
                association: 'thumbnails',
                as: 'thumbnails',
              },
            ],
          },
          {
            association: 'trailers',
            as: 'trailers',
          },
        ],
      });

      const series = await SeriesModel.findAll({
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
        ],
      });

      // set type to movies and series

      movies.forEach(movie => {
        movie.setDataValue('type', 'movie');
      });

      series.forEach(serie => {
        serie.setDataValue('type', 'series');
      });

      return [...movies, ...series];
    }
    try {
      const movies = await MoviesModel.findAll({
        where: {
          [Op.or]: [
            {
              title: {
                [Op.match]: query,
              },
            },
            {
              description: {
                [Op.match]: query,
              },
            },
          ],
        },
        include: [
          {
            association: 'banners',
            as: 'banners',
          },
          {
            association: 'videos',
            as: 'videos',
            include: [
              {
                association: 'sources',
                as: 'sources',
              },
              {
                association: 'thumbnails',
                as: 'thumbnails',
              },
            ],
          },
          {
            association: 'trailers',
            as: 'trailers',
          },
        ],
      });

      const series = await SeriesModel.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.match]: query,
              },
            },
            {
              description: {
                [Op.match]: query,
              },
            },
          ],
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
        ],
      });

      // set type to movies and series

      movies.forEach(movie => {
        movie.setDataValue('type', 'movie');
      });

      series.forEach(serie => {
        serie.setDataValue('type', 'series');
      });

      return [...movies, ...series];
    } catch (e) {
      console.log(e);
    }
  }
}
