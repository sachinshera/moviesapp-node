// express

import CategoryAssocService from '@/services/category/category.assoc.service';
import GenresAssocService from '@/services/genres/genres.assoc.service';
import MoviesService from '@/services/movies/movies.service';
import { Request, Response } from 'express';
export default class MoviesController {
  // add new
  public async addMovie(req: Request, res: Response) {
    try {
      const movie = await MoviesService.addMovie(req.body);

      res.status(200).json(movie);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }
  //get all movies
  public async getAllMovies(req: Request, res: Response) {
    try {
      const movies = await MoviesService.getAllMovies();
      res.status(200).json(movies);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // get movie by id
  public async getMovieById(req: Request, res: Response) {
    try {
      const movie = await MoviesService.getMovieById(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // update movie

  public async updateMovie(req: Request, res: Response) {
    try {
      const movie = await MoviesService.updateMovie(req.params.id, req.body);
      res.status(200).json(movie);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // delete movie

  public async deleteMovie(req: Request, res: Response) {
    try {
      const movie = await MoviesService.deleteMovie(req.params.id);
      res.status(200).json(movie);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // get movies by genres id

  public async getMoviesByGenresId(req: Request, res: Response) {
    try {
      let id = req.params.id as string;
      const movies = await GenresAssocService.getMoviesByGenreId(id);
      res.status(200).json(movies);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  /// get movies by category id

  public async getMoviesByCategoryId(req: Request, res: Response) {
    try {
      let id = req.params.id as string;
      const movies = await CategoryAssocService.getMoviesByCategoryId(id);
      res.status(200).json(movies);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }
}
