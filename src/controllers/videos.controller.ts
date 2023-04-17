import { VideosService } from '@/services/videos.service';
import { Request, Response } from 'express';
export class VideosController {
  // add videos

  public static async addVideos(req: Request, res: Response) {
    try {
      let addVideos = await VideosService.addVideos(req.body);

      if (addVideos == 'videos already exist') {
        res.status(400).json({
          message: 'videos already exist',
        });
      }
      res.send(addVideos);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
  //   get all videos
  public static async getAllVideos(req: Request, res: Response) {
    try {
      let getAllVideos = await VideosService.getVideos();
      res.send(getAllVideos);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   get videos by id
  public static async getVideosById(req: Request, res: Response) {
    try {
      let getVideosById = await VideosService.getVideosById(req.params.id);
      res.send(getVideosById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   delete videos by id
  public static async deleteVideosById(req: Request, res: Response) {
    try {
      let deleteVideosById = await VideosService.deleteVideos(req.params.id);
      res.status(200).json({
        message: 'videos deleted successfully',
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   add videos source

  public static async addVideosSource(req: Request, res: Response) {
    try {
      let addVideosSource = await VideosService.addVideosSource(req.body);
      if (addVideosSource == 'invalid video id') {
        res.status(400).json({
          message: 'invalid video id',
        });
      } else if (addVideosSource == 'videos source already exist') {
        res.status(400).json({
          message: 'videos source already exist',
        });
      } else {
        res.status(200).send(addVideosSource);
      }
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   get  source by  video id

  public static async getVideosSourceById(req: Request, res: Response) {
    try {
      let getVideosSourceById = await VideosService.getVideosSourceByVideoId(req.params.id);
      res.send(getVideosSourceById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   getSourceById

  public static async getSourceById(req: Request, res: Response) {
    try {
      let getSourceById = await VideosService.getSourceById(req.params.id);
      res.send(getSourceById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
}
