import { VideosController } from '@/controllers/videos.controller';
import { addVideosDto, addVideosSourceDto } from '@/dtos/videos/videos.dtos';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';

import { Router } from 'express';

class VideosRoutes {
  public router = Router();
  public path = '/videos';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //    add videos
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(addVideosDto, 'body'), VideosController.addVideos);

    // get all videos
    this.router.get(`${this.path}`, authMiddleware, VideosController.getAllVideos);

    // get videos by id
    this.router.get(`${this.path}/:id`, authMiddleware, VideosController.getVideosById);
    // delete videos by id
    this.router.delete(`${this.path}/:id`, authMiddleware, VideosController.deleteVideosById);

    // add videos source

    this.router.post(`${this.path}/source`, authMiddleware, validationMiddleware(addVideosSourceDto, 'body'), VideosController.addVideosSource);

    // get sources by videos id
    this.router.get(`${this.path}/source/video/:id`, authMiddleware, VideosController.getVideosSourceById);

    // get source by id

    this.router.get(`${this.path}/source/:id`, authMiddleware, VideosController.getSourceById);
  }
}

export default VideosRoutes;
