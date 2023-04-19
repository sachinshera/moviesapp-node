import SeriesSeasonVideoController from '@/controllers/series/series.season.video.controller';
import { addSeasonVideoDTO } from '@/dtos/series/series.season.video.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class SeriesSeasonVideoRoutes {
  public router = Router();
  public path = '/series/:seriesId/season/:seasonId/video';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(this.path, authMiddleware, validationMiddleware(addSeasonVideoDTO), SeriesSeasonVideoController.addVideoToSeason);

    this.router.get(this.path, authMiddleware, SeriesSeasonVideoController.getAllVideosInSeason);

    // update
    this.router.put(
      this.path + '/:videoId',
      authMiddleware,
      validationMiddleware(addSeasonVideoDTO),
      SeriesSeasonVideoController.updateVideoInSeason,
    );

    // delete
    this.router.delete(this.path + '/:videoId', authMiddleware, SeriesSeasonVideoController.deleteVideoInSeason);
  }
}

export default SeriesSeasonVideoRoutes;
