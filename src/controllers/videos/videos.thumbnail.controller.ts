import VideosThumbnailsService from '@/services/videos/videos.thumbnail.service';
import { Request, Response } from 'express';

export class VideosThumbnailsController {
  // add new video thumbnail
  public static async addVideoThumbnail(req: Request, res: Response) {
    try {
      const videoThumbnail = await VideosThumbnailsService.addVideoThumbnail(req.body);
      res.status(200).json(videoThumbnail);
    } catch (error) {
      if (error.message == 'Video not found') {
        res.status(404).json({ message: error.message });
      } else if (error.message == 'Thumbnail already exist') {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }

  //get all  thumbnails by video id

  public static async getVideoThumbnails(req: Request, res: Response) {
    try {
      let videoId = req.params.videoId;
      const videoThumbnails = await VideosThumbnailsService.getVideoThumbnails(videoId);
      res.status(200).json(videoThumbnails);
    } catch (error) {
      if (error.message == 'Video not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }

  //   delete video thumbnail by id
  public static async deleteVideoThumbnail(req: Request, res: Response) {
    try {
      let id = req.params.id;
      const videoThumbnail = await VideosThumbnailsService.deleteVideoThumbnailById(id);
      res.status(200).json(videoThumbnail);
    } catch (error) {
      if (error.message == 'Video thumbnail not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }

  //   update thumbail by id
  public static async updateVideoThumbnail(req: Request, res: Response) {
    try {
      let id = req.params.id;
      const videoThumbnail = await VideosThumbnailsService.updateVideoThumbnailById(id, req.body);
      res.status(200).json(videoThumbnail);
    } catch (error) {
      if (error.message == 'Video thumbnail not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  }
}
