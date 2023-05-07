import { GenresAssocModel } from '@/models/genres/genres.assoc.model';
import { nanoid } from 'nanoid';
import { Op } from 'sequelize';
export default class GenresAssocService {
  static async createGenresAssoc(movies_series_id: string, genreId: string, type: string) {
    try {
      // check existing
      const existing = await GenresAssocModel.findOne({
        where: {
          movies_series_id,
          genreId,
          type,
        },
      });

      if (existing) {
        throw new Error('GenresAssoc already exists');
      }
      const genresAssoc = await GenresAssocModel.create({
        id: nanoid(20),
        movies_series_id,
        genreId,
        type,
      });
      return genresAssoc;
    } catch (err) {
      throw err;
    }
  }
  static async getAllGenresAssoc() {
    try {
      const genresAssoc = await GenresAssocModel.findAll({
        include: [
          {
            association: 'genresDetails',
          },
          {
            association: 'moviesDetails',
          },
        ],
      });
      return genresAssoc;
    } catch (err) {
      throw err;
    }
  }
  static async getGenresAssocById(id: string) {
    try {
      const genresAssoc = await GenresAssocModel.findOne({
        where: {
          id,
        },
      });
      return genresAssoc;
    } catch (err) {
      throw err;
    }
  }
  static async updateGenresAssoc(id: string, movies_series_id: string, genreId: string, type: string) {
    try {
      const genresAssoc = await GenresAssocModel.update(
        {
          movies_series_id,
          genreId,
          type,
        },
        {
          where: {
            id,
          },
        },
      );
      return genresAssoc;
    } catch (err) {
      throw err;
    }
  }
  static async deleteGenresAssoc(id: string) {
    try {
      const genresAssoc = await GenresAssocModel.destroy({
        where: {
          id,
        },
      });
      return genresAssoc;
    } catch (err) {
      throw err;
    }
  }

  // get all by genre id
  static async getAllByGenreId(genreId: string) {
    try {
      const genresAssoc = await GenresAssocModel.findAll({
        where: {
          genreId,
        },
        include: [
          {
            association: 'moviesDetails',
          },
          {
            association: 'seriesDetails',
          },
          {
            association: 'genresDetails',
          },
        ],
        attributes: ['type'],
      });
      return genresAssoc;
    } catch (err) {
      throw err;
    }
  }

  // get movies by genre id

  static async getMoviesByGenreId(genreId: string) {
    try {
      const genresAssoc: any = await GenresAssocModel.findAll({
        where: {
          genreId,
        },
        include: [
          {
            association: 'moviesDetails',
            where: {
              id: {
                [Op.not]: null,
              },
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
              },
            ],
          },
          {
            association: 'genresDetails',
          },
        ],
      });
      // combine all movies
      let movies = genresAssoc.map(item => item.moviesDetails);
      return movies;
    } catch (e) {
      throw e;
    }
  }

  // get series by genre id

  static async getSeriesByGenreId(genreId: string) {
    try {
      const genresAssoc: any = await GenresAssocModel.findAll({
        where: {
          genreId,
        },
        include: [
          {
            association: 'seriesDetails',
            where: {
              id: {
                [Op.not]: null,
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
            ],
          },
          {
            association: 'genresDetails',
          },
        ],
      });
      // combine all series
      let series = genresAssoc.map(item => item.seriesDetails);
      return series;
    } catch (e) {
      throw e;
    }
  }
}
