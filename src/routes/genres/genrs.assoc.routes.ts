import GenresAssocController from '@/controllers/genres/genres.assoc.controller';
import { genresAssocDto } from '@/dtos/genres.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class GenresAssocRoutes {
  public router = Router();
  public path = '/genres/assoc';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //    add genres
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(genresAssocDto, 'body'), GenresAssocController.createGenresAssoc);

    // get all genres
    this.router.get(`${this.path}`, GenresAssocController.getAllGenresAssoc);

    // get genres by id
    this.router.get(`${this.path}/:id`, authMiddleware, GenresAssocController.getGenresAssocById);
    // delete genres by id
    this.router.delete(`${this.path}/:id`, authMiddleware, GenresAssocController.deleteGenresAssoc);

    // update genres by id
    this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(genresAssocDto, 'body', true), GenresAssocController.updateGenresAssoc);

    //getAllByGenreid

    this.router.get(`${this.path}/genre/:id`, GenresAssocController.getAllByGenreid);
  }
}

export default GenresAssocRoutes;
