import { SeriesService } from '@/services/series/series.service';
import { Request, Response } from 'express';

export class SeriesController {
  // add series
  public static async addSeries(req: Request, res: Response) {
    try {
      let addSeries = await SeriesService.createSeries(req.body);
      res.send(addSeries);
    } catch (err) {
      if (err.message == 'Series already exists') {
        res.status(400).json({
          message: 'Series already exists',
        });
      }
      res.status(500).send('Internal Server Error');
    }
  }

  //   get all series
  public static async getAllSeries(req: Request, res: Response) {
    try {
      let limit = req.query.limit ? parseInt(req.query.limit as any) : 10;
      let offset = req.query.offset ? parseInt(req.query.offset as any) : 0;
      let q = req.query.q ? (req.query.q as any) : '';
      let date = req.query.date ? (req.query.date as any) : '';
      let getAllSeries = await SeriesService.getAllSeries(limit, offset, q, date);
      res.send(getAllSeries);
    } catch (err) {
      console.log('err', err);
      res.status(500).send('Internal Server Error');
    }
  }

  //   get series by id

  public static async getSeriesById(req: Request, res: Response) {
    try {
      let getSeriesById = await SeriesService.getSeriesById(req.params.id);
      res.send(getSeriesById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   update series by id
  public static async updateSeriesById(req: Request, res: Response) {
    try {
      let updateSeriesById = await SeriesService.updateSeries(req.params.id, req.body);
      res.send(updateSeriesById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   delete series by id

  public static async deleteSeriesById(req: Request, res: Response) {
    try {
      let deleteSeriesById = await SeriesService.deleteSeries(req.params.id);
      res.status(200).json({
        message: 'series deleted successfully',
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
}
