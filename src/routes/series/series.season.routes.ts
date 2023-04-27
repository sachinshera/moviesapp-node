import { SeriesSeasonController } from '@/controllers/series/series.season.controller';
import { addSeriesSeasonDto } from '@/dtos/series/series.season.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';
class SeriesSeasonRoutes {
  public router = Router();
  public path = '/seriesseason/:seriesId/season';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, authMiddleware, validationMiddleware(addSeriesSeasonDto), SeriesSeasonController.addSeason);

    this.router.get(this.path, authMiddleware, SeriesSeasonController.getAllSeasons);

    this.router.get(this.path + '/:seasonId', authMiddleware, SeriesSeasonController.getSeasonById);

    // update
    this.router.put(this.path + '/:seasonId', authMiddleware, validationMiddleware(addSeriesSeasonDto), SeriesSeasonController.updateSeasonById);

    // delete
    this.router.delete(this.path + '/:seasonId', authMiddleware, SeriesSeasonController.deleteSeasonById);
  }
}

export default SeriesSeasonRoutes;
