import { MoviesBannerModel } from '@/models/movies/movies.banner.model';
import { MoviesModel } from '@/models/movies/movies.model';
import { nanoid } from 'nanoid';

export default class MoviesBannerService {
  // add new movie banner
  public static async addMovieBanner(movieBanner: any) {
    // check if movie banner already exists
    try {
      const movieBannerExists = await MoviesBannerModel.findOne({
        where: {
          movie_id: movieBanner.movie_id,
        },
      });

      if (movieBannerExists) {
        throw new Error('Movie banner already exists');
      } else {
        const newMovieBanner = await MoviesBannerModel.create({
          id: nanoid(),
          ...movieBanner,
        });
        if (newMovieBanner) {
          return newMovieBanner;
        } else {
          throw new Error('Error creating movie banner');
        }
      }
    } catch (error) {
      console.log('error', error);
      throw new Error(error);
    }
  }

  // get all movie banners
  public static async getAllMovieBanners() {
    try {
      const movieBanners = await MoviesBannerModel.findAll();
      return movieBanners;
    } catch (error) {
      console.log('error', error);
      throw new Error(error);
    }
  }

  // get movie banner by id
  public static async getMovieBannerById(id: string) {
    try {
      const movieBanner = await MoviesBannerModel.findOne({
        where: {
          id,
        },
      });
      if (movieBanner) {
        return movieBanner;
      } else {
        throw new Error('Error getting movie banner');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // get movie banner by movie id
  public static async getMovieBannerByMovieId(movieId: string) {
    try {
      const movieBanner = await MoviesBannerModel.findOne({
        where: {
          movie_id: movieId,
        },
      });
      if (movieBanner) {
        return movieBanner;
      } else {
        throw new Error('Error getting movie banner');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // update movie banner
  public static async updateMovieBanner(movieBanner: any) {
    try {
      const movieBannerExists = await MoviesBannerModel.findOne({
        where: {
          id: movieBanner.id,
        },
      });

      if (movieBannerExists) {
        const updatedMovieBanner = await MoviesBannerModel.update(
          {
            ...movieBanner,
          },
          {
            where: {
              id: movieBanner.id,
            },
          },
        );
        if (updatedMovieBanner) {
          // return updated movie banner
          const UpdatedmovieBanner = await MoviesBannerModel.findOne({
            where: {
              id: movieBanner.id,
            },
          });
          return UpdatedmovieBanner;
        }
      } else {
        throw new Error('Movie banner does not exist');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  //   // delete movie banner

  public static async deleteMovieBanner(id: string) {
    try {
      const movieBannerExists = await MoviesBannerModel.findOne({
        where: {
          id,
        },
      });

      if (movieBannerExists) {
        const deletedMovieBanner = await MoviesBannerModel.destroy({
          where: {
            id,
          },
        });
        if (deletedMovieBanner) {
          return 'Movie banner deleted successfully';
        }
      } else {
        throw new Error('Movie banner does not exist');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
