import { MoviesModel } from '@/models/movies/movies.model';
import { SeriesModel } from '@/models/series/series.model';
import { Op, Sequelize } from 'sequelize';

export default class SearchService {
  static async search(query: string) {
    console.log('query', query);

    // find  movies using full text search
    try {
      var title = query;
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

      console.log('movies');

      return [...movies, ...series];
    } catch (e) {
      console.log(e);
    }
  }
}
