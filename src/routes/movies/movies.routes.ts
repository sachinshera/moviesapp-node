import MoviesController from '@/controllers/movies/movies.controller';
import { addMoviesDto } from '@/dtos/movies/movies.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class MoviesRoutes {
  public router: Router = Router();
  public moviesController = new MoviesController();
  public path = '/movies';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(addMoviesDto, 'body'), this.moviesController.addMovie);
    // get all movies
    this.router.get(`${this.path}`, this.moviesController.getAllMovies);
    // get movie by id
    this.router.get(`${this.path}/:id`, this.moviesController.getMovieById);
    // update movie
    this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(addMoviesDto, 'body', true), this.moviesController.updateMovie);
    // delete movie
    this.router.delete(`${this.path}/:id`, authMiddleware, this.moviesController.deleteMovie);

    // get movies by genre id
    this.router.get(`${this.path}/genre/:id`, this.moviesController.getMoviesByGenresId);

    // get movies by category id

    this.router.get(`${this.path}/category/:id`, this.moviesController.getMoviesByCategoryId);
  }
}

export default MoviesRoutes;
