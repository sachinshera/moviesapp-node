import { VideosSoureService } from '@/services/videos/videos.source.service';
import { Request, Response } from 'express';
export class VideosSourceController {
  // add videos source

  public static async addVideosSource(req: Request, res: Response) {
    try {
      let addVideosSource = await VideosSoureService.addVideosSource(req.body);
      if (addVideosSource == 'invalid video id') {
        res.status(400).json({
          message: 'invalid video id',
        });
      }
      res.send(addVideosSource);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   delete source by id
  public static async deleteVideosSourceById(req: Request, res: Response) {
    try {
      let deleteVideosSourceById = await VideosSoureService.deleteVideosSource(req.params.id);
      res.status(200).json({
        message: 'video source deleted successfully',
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   update videos source by id
  public static async updateVideosSourceById(req: Request, res: Response) {
    try {
      let updateVideosSourceById = await VideosSoureService.updateVideosSource(req.params.id, req.body);
      res.status(200).json({
        message: 'video source updated successfully',
        data: updateVideosSourceById,
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   get  source by  video id

  public static async getVideosSourceById(req: Request, res: Response) {
    try {
      let getVideosSourceById = await VideosSoureService.getVideosSourceByVideoId(req.params.id);
      res.send(getVideosSourceById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   change status
  public static async changeStatus(req: Request, res: Response) {
    try {
      let changeStatus = await VideosSoureService.changeStatusVideosSource(req.params.id, req.body);
      res.status(200).json({
        message: 'video source status changed successfully',
        data: changeStatus,
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   //   getSourceById

  public static async getSourceById(req: Request, res: Response) {
    try {
      let getSourceById = await VideosSoureService.getSourceById(req.params.id);
      res.send(getSourceById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
}
