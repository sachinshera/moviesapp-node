import { CategoryAssocModel } from '@/models/category/category.assoc.model';
import { nanoid } from 'nanoid';
import { Op } from 'sequelize';
export default class CategoryAssocService {
  static async AddAssoc(data: CategoryAssocModel) {
    try {
      // check exist
      let check = await CategoryAssocModel.findOne({
        where: {
          series_movie_id: data.series_movie_id,
        },
      });
      if (check) {
        throw new Error('Already exists');
      }
      let add = await CategoryAssocModel.create({
        id: nanoid(20),
        ...data,
      });
      return add;
    } catch (e) {
      throw new Error(e);
    }
  }

  static async getAll() {
    return await CategoryAssocModel.findAll({
      include: [
        {
          association: 'categoryDetails',
          attributes: ['name'],
        },
        {
          association: 'moviesDetails',
        },
        {
          association: 'seriesDetails',
        },
      ],
      attributes: ['id', 'type'],
    });
  }

  static async update(data: CategoryAssocModel) {
    try {
      // check exist
      let check = await CategoryAssocModel.findOne({
        where: {
          series_movie_id: data.series_movie_id,
        },
      });
      if (!check) {
        throw new Error('Not found');
      }
      let update = await CategoryAssocModel.update(data, {
        where: {
          series_movie_id: data.series_movie_id,
        },
      });

      // get updated data
      let updated = await CategoryAssocModel.findOne({
        where: {
          series_movie_id: data.series_movie_id,
        },
      });
      return updated;
    } catch (error) {
      throw new Error(error.toString());
    }
  }

  // delete by id or series_movie_id

  static async delete(id: string) {
    try {
      let del = await CategoryAssocModel.destroy({
        where: {
          id: id,
        },
      });
      return del;
    } catch (error) {
      throw new Error('Failed to delete');
    }
  }

  // get movies by category id

  static async getMoviesByCategoryId(id: string) {
    try {
      let get: any = await CategoryAssocModel.findAll({
        where: {
          category_id: id,
          type: 'movie',
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
            association: 'categoryDetails',
          },
        ],
      });
      let movies = get.map(item => item.moviesDetails);
      return movies;
    } catch (error) {
      throw new Error(error.toString());
    }
  }

  // get series by category id
  // @ts-ignore
  static async getSeriesByCategoryId(id: string) {
    try {
      let get: any = await CategoryAssocModel.findAll({
        where: {
          category_id: id,
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
        ],
      });
      let series = get.map(item => item.seriesDetails);
      return series;
    } catch (error) {
      throw new Error(error.toString());
    }
  }
}
