import { SeriesSeasonService } from '@/services/series/series.season.service';
import { Request, Response } from 'express';

export class SeriesSeasonController {
  // add new season
  public static async addSeason(req: Request, res: Response) {
    try {
      let seriesId = req.params.seriesId;
      let addSeason = await SeriesSeasonService.addSeason(seriesId, req.body);
      return res.status(200).json(addSeason);
    } catch (err) {
      console.log(err);
      if (err.message == 'Series not found') {
        res.status(400).json({
          message: 'Series not found',
        });
      }
      if (err.message == 'Season already exists') {
        res.status(400).json({
          message: 'Season already exists',
        });
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  }

  // get all seasons

  public static async getAllSeasons(req: Request, res: Response) {
    try {
      let seriesId = req.params.seriesId;
      let getAllSeasons = await SeriesSeasonService.getAllSeasons(seriesId);
      res.send(getAllSeasons);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   get season by id

  public static async getSeasonById(req: Request, res: Response) {
    try {
      let seriesId = req.params.seriesId;
      let seasonId = req.params.seasonId;
      let getSeasonById = await SeriesSeasonService.getSeasonById(seriesId, seasonId);
      res.send(getSeasonById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   update season by id
  public static async updateSeasonById(req: Request, res: Response) {
    try {
      let seriesId = req.params.seriesId;
      let seasonId = req.params.seasonId;
      let updateSeasonById = await SeriesSeasonService.updateSeason(seriesId, seasonId, req.body);
      res.send(updateSeasonById);
    } catch (err) {
      console.log(err);
      if (err.message == 'Season does not exist') {
        res.status(400).json({
          message: 'Season does not exist',
        });
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  }

  //   delete season by id

  public static async deleteSeasonById(req: Request, res: Response) {
    try {
      let seriesId = req.params.seriesId;
      let seasonId = req.params.seasonId;
      let deleteSeasonById = await SeriesSeasonService.deleteSeason(seriesId, seasonId);
      res.status(200).json({
        message: 'Season deleted successfully',
      });
    } catch (err) {
      res.status(404).send('Failed to delete season');
    }
  }
}
