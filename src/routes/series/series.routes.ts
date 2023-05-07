import { SeriesController } from '@/controllers/series/series.controller';
import { addSeriesDto } from '@/dtos/series/series.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class SeriesRoutes {
  public router = Router();
  public path = '/series';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //    add series
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(addSeriesDto, 'body'), SeriesController.addSeries);

    // get all series
    this.router.get(`${this.path}`, SeriesController.getAllSeries);

    // get series by id
    this.router.get(`${this.path}/:id`, authMiddleware, SeriesController.getSeriesById);

    // update series by id

    this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(addSeriesDto, 'body', true), SeriesController.updateSeriesById);

    // delete series by id

    this.router.delete(`${this.path}/:id`, authMiddleware, SeriesController.deleteSeriesById);

    // get related series by genre id
    this.router.get(`${this.path}/genre/:id`, SeriesController.getSeriesByGenreId);

    // get related series by category id

    this.router.get(`${this.path}/category/:id`, SeriesController.getSeriesByCategoryId);
  }
}

export default SeriesRoutes;
