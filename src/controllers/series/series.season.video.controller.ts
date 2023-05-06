import SeriesSeasonVideoService from '@/services/series/series.season.video.service';
import { Request, Response } from 'express';

export class SeriesSeasonVideoController {
  // add new video to season
  public static async addVideoToSeason(req: Request, res: Response) {
    try {
      const seriesId = req.params.seriesId;
      const seasonId = req.params.seasonId;
      const addVideoToSeason = await SeriesSeasonVideoService.addVideoToSeason(seriesId, seasonId, req.body);
      return res.status(200).json(addVideoToSeason);
    } catch (err) {
      console.log(err);
      if (err.message == 'Season not found') {
        res.status(400).json({
          message: 'Season not found',
        });
      }
      if (err.message == 'Video already exists') {
        res.status(400).json({
          message: 'Video already exists',
        });
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  }

  //get all videos in season
  public static async getAllVideosInSeason(req: Request, res: Response) {
    try {
      const seriesId = req.params.seriesId;
      const seasonId = req.params.seasonId;
      const getAllVideosInSeason = await SeriesSeasonVideoService.getAllVideosInSeason(seriesId, seasonId);
      res.send(getAllVideosInSeason);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   update
  public static async updateVideoInSeason(req: Request, res: Response) {
    try {
      const seriesId = req.params.seriesId;
      const seasonId = req.params.seasonId;
      const videoId = req.params.videoId;
      const updateVideoInSeason = await SeriesSeasonVideoService.updateVideoInSeason(seriesId, seasonId, videoId, req.body);
      res.send(updateVideoInSeason);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   delete
  public static async deleteVideoInSeason(req: Request, res: Response) {
    try {
      const seriesId = req.params.seriesId;
      const seasonId = req.params.seasonId;
      const videoId = req.params.videoId;
      const deleteVideoInSeason = await SeriesSeasonVideoService.deleteVideoFromSeason(seriesId, seasonId, videoId);
      res.send(deleteVideoInSeason);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
}

export default SeriesSeasonVideoController;
