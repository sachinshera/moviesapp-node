import CategoryAssocService from '@/services/category/category.assoc.service';
import GenresAssocService from '@/services/genres/genres.assoc.service';
import { SeriesService } from '@/services/series/series.service';
import { Request, Response } from 'express';
export class SeriesController {
  // add series
  public static async addSeries(req: Request, res: Response) {
    try {
      const addSeries = await SeriesService.createSeries(req.body);
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
      const limit = req.query.limit ? parseInt(req.query.limit as any) : 10;
      const offset = req.query.offset ? parseInt(req.query.offset as any) : 0;
      const q = req.query.q ? (req.query.q as any) : '';
      const date = req.query.date ? (req.query.date as any) : '';
      const getAllSeries = await SeriesService.getAllSeries(limit, offset, q, date);
      res.send(getAllSeries);
    } catch (err) {
      console.log('err', err);
      res.status(500).send('Internal Server Error');
    }
  }

  //   get series by id

  public static async getSeriesById(req: Request, res: Response) {
    try {
      const getSeriesById = await SeriesService.getSeriesById(req.params.id);
      res.send(getSeriesById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   update series by id
  public static async updateSeriesById(req: Request, res: Response) {
    try {
      const updateSeriesById = await SeriesService.updateSeries(req.params.id, req.body);
      res.send(updateSeriesById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //   delete series by id

  public static async deleteSeriesById(req: Request, res: Response) {
    try {
      const deleteSeriesById = await SeriesService.deleteSeries(req.params.id);
      res.status(200).json({
        message: 'series deleted successfully',
      });
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  // get series by genre id
  public static async getSeriesByGenreId(req: Request, res: Response) {
    try {
      const getSeriesByGenreId = await GenresAssocService.getSeriesByGenreId(req.params.id);
      res.send(getSeriesByGenreId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  // get series by category id

  public static async getSeriesByCategoryId(req: Request, res: Response) {
    try {
      const getSeriesByCategoryId = await CategoryAssocService.getSeriesByCategoryId(req.params.id);
      res.send(getSeriesByCategoryId);
    } catch (err) {
      console.log('err', err);

      res.status(500).send('Internal Server Error');
    }
  }
}
