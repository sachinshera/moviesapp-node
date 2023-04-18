import { VideosThumbnailsController } from '@/controllers/videos/videos.thumbnail.controller';
import { AddThumnnailDto, UpdateThumnnailDto } from '@/dtos/videos/videos.thumbnail.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import { Router } from 'express';
import validationMiddleware from '@/middlewares/validation.middleware';
export default class VideosThumbnailsRoutes {
  public router = Router();
  public path = '/videos/thumbnails';
  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    // add new video thumbnail

    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(AddThumnnailDto, 'body'), VideosThumbnailsController.addVideoThumbnail);

    // get all video thumbnails by video id
    this.router.get(`${this.path}/video/:videoId`, authMiddleware, VideosThumbnailsController.getVideoThumbnails);

    // delete video thumbnail by id

    this.router.delete(`${this.path}/:id`, authMiddleware, VideosThumbnailsController.deleteVideoThumbnail);

    // update video thumbnail by id

    this.router.put(
      `${this.path}/:id`,
      authMiddleware,
      validationMiddleware(UpdateThumnnailDto, 'body'),
      VideosThumbnailsController.updateVideoThumbnail,
    );
  }
}
