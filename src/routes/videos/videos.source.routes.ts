import { VideosSourceController } from '@/controllers/videos/videos.souce.controller';
import { addVideosSourceDto } from '@/dtos/videos/video.source';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';
class VideosSourceRoutes {
  public router = Router();
  public path = '/videos/source';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // get source detail by id

    this.router.get(`${this.path}/:id`, VideosSourceController.getSourceById);
    //    add videos source
    this.router.post(`${this.path}`, validationMiddleware(addVideosSourceDto, 'body'), VideosSourceController.addVideosSource);

    //   delete source by id
    this.router.delete(`${this.path}/:id`, VideosSourceController.deleteVideosSourceById);

    //   update videos source by id

    this.router.put(`${this.path}/:id`, validationMiddleware(addVideosSourceDto, 'body'), VideosSourceController.updateVideosSourceById);

    // get  source by video id

    this.router.get(`${this.path}/video/:id`, VideosSourceController.getVideosSourceById);
  }
}

export default VideosSourceRoutes;
