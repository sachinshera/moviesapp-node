import GenresController from '@/controllers/ganres.controller';
import { genresDto } from '@/dtos/genres.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class GenresRoutes {
  public router = Router();
  public path = '/genres';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //    add genres
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(genresDto, 'body'), GenresController.createGenres);

    // get all genres
    this.router.get(`${this.path}`, GenresController.getAllGenres);

    // get genres by id
    this.router.get(`${this.path}/:id`, authMiddleware, GenresController.getGenresById);
    // delete genres by id
    this.router.delete(`${this.path}/:id`, authMiddleware, GenresController.deleteGenres);

    // update genres by id
    this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(genresDto, 'body', true), GenresController.updateGenres);
  }
}

export default GenresRoutes;
