import { TrailerController } from '@/controllers/trailer/trailer.controller';
import { addTrailerDto } from '@/dtos/trailer/trailer.dto';
import { Router } from 'express';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';

class TrailerRoutes {
  public router = Router();
  public path = '/trailer';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //    add trailer
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(addTrailerDto, 'body'), TrailerController.createTrailer);

    // get all trailers
    this.router.get(`${this.path}`, authMiddleware, TrailerController.getAllTrailers);

    // get trailer by movie id
    this.router.get(`${this.path}/movie/:id`, authMiddleware, TrailerController.getTrailerByMovieId);

    // get trailer by series id
    this.router.get(`${this.path}/series/:id`, authMiddleware, TrailerController.getTrailerBySeriesId);

    // update trailer by movie id
    this.router.put(`${this.path}/movie/:id`, authMiddleware, validationMiddleware(addTrailerDto, 'body'), TrailerController.updateTrailerByMovieId);

    // update trailer by series id
    this.router.put(
      `${this.path}/series/:id`,
      authMiddleware,
      validationMiddleware(addTrailerDto, 'body'),
      TrailerController.updateTrailerBySeriesId,
    );

    // delete trailer by id
    this.router.delete(`${this.path}/:id`, authMiddleware, TrailerController.deleteTrailerById);

    // delete trailer by movie id
    this.router.delete(`${this.path}/movie/:id`, authMiddleware, TrailerController.deleteTrailerByMovieId);

    // delete trailer by series id

    this.router.delete(`${this.path}/series/:id`, authMiddleware, TrailerController.deleteTrailerBySeriesId);
  }
}

export default TrailerRoutes;
