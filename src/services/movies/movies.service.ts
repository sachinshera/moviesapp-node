import { MoviesBannerModel } from '@/models/movies/movies.banner.model';
import { MoviesModel } from '@/models/movies/movies.model';
import { VideosSourceModel } from '@/models/videos/video.souce.model';
import { VideosModel } from '@/models/videos/videos.model';
import { VideosThumbnailsModel } from '@/models/videos/videos.thumnails.model';

import { nanoid } from 'nanoid';
export default class MoviesService {
  // add new movie
  public static async addMovie(movie: any) {
    // check if movie already exists
    try {
      const movieExists = await MoviesModel.findOne({
        where: {
          title: movie.title,
        },
      });

      if (movieExists) {
        throw new Error('Movie already exists');
      } else {
        const newMovie = await MoviesModel.create({
          id: nanoid(),
          ...movie,
        });
        if (newMovie) {
          return newMovie;
        } else {
          throw new Error('Error creating movie');
        }
      }
    } catch (error) {
      console.log('error', error);
      throw new Error(error);
    }
  }

  // get all movies
  public static async getAllMovies() {
    try {
      const movies = await MoviesModel.findAll({
        order: [['createdAt', 'DESC']],
        include: [
          {
            model: MoviesBannerModel,
            as: 'banners',
          },
          {
            model: VideosModel,
            as: 'videos',
            include: [
              {
                model: VideosSourceModel,
                as: 'sources',
              },
              {
                model: VideosThumbnailsModel,
                as: 'thumbnails',
              },
            ],
          },
        ],
      });
      if (movies) {
        return movies;
      } else {
        throw new Error('Error getting movies');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  // get movie by id
  public static async getMovieById(id: string) {
    try {
      const movie = await MoviesModel.findOne({
        where: {
          id,
        },
        include: [
          {
            model: MoviesBannerModel,
            as: 'banners',
          },
          {
            model: VideosModel,
            as: 'videos',
            include: [
              {
                model: VideosSourceModel,
                as: 'sources',
              },
              {
                model: VideosThumbnailsModel,
                as: 'thumbnails',
              },
            ],
          },
        ],
      });
      if (movie) {
        return movie;
      } else {
        throw new Error('Error getting movie');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  // update movie
  public static async updateMovie(id: string, movie: any) {
    try {
      const updatedMovie = await MoviesModel.update(movie, {
        where: {
          id,
        },
      });
      if (updatedMovie) {
        //  return updated data
        const movie = await MoviesModel.findOne({
          where: {
            id,
          },
        });
        return movie;
      } else {
        throw new Error('Error updating movie');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  // delete movie
  public static async deleteMovie(id: string) {
    try {
      const deletedMovie = await MoviesModel.destroy({
        where: {
          id,
        },
      });
      if (deletedMovie) {
        return 'Movie deleted';
      } else {
        throw new Error('Error deleting movie');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}
