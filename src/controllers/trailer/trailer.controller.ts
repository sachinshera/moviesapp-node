import TrailerService from '@/services/trailer/trailer.service';
import { Request, Response } from 'express';

export class TrailerController {
  // get all trailers
  public static async getAllTrailers(req: Request, res: Response) {
    try {
      let getAllTrailers = await TrailerService.getAllTrailers();
      res.send(getAllTrailers);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
  //  create trailer
  public static async createTrailer(req: Request, res: Response) {
    try {
      let data = req.body;
      let createTrailer = await TrailerService.createTrailer(data);
      res.send(createTrailer);
    } catch (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    }
  }

  //  get trailer by movie id

  public static async getTrailerByMovieId(req: Request, res: Response) {
    try {
      let getTrailerByMovieId = await TrailerService.getTrailerByMovieId(req.params.id);
      res.send(getTrailerByMovieId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //  get trailer by series id

  public static async getTrailerBySeriesId(req: Request, res: Response) {
    try {
      let getTrailerBySeriesId = await TrailerService.getTrailerBySeriesId(req.params.id);
      res.send(getTrailerBySeriesId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //  update trailer by movie id

  public static async updateTrailerByMovieId(req: Request, res: Response) {
    try {
      let updateTrailerByMovieId = await TrailerService.updateTrailerByMovieId(req.params.id, req.body);
      res.send(updateTrailerByMovieId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //  update trailer by series id

  public static async updateTrailerBySeriesId(req: Request, res: Response) {
    try {
      let updateTrailerBySeriesId = await TrailerService.updateTrailerBySeriesId(req.params.id, req.body);
      res.send(updateTrailerBySeriesId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //  delete trailer by movie id

  public static async deleteTrailerByMovieId(req: Request, res: Response) {
    try {
      let deleteTrailerByMovieId = await TrailerService.deleteTrailerByMovieId(req.params.id);
      res.send(deleteTrailerByMovieId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //  delete trailer by series id

  public static async deleteTrailerBySeriesId(req: Request, res: Response) {
    try {
      let deleteTrailerBySeriesId = await TrailerService.deleteTrailerBySeriesId(req.params.id);
      res.send(deleteTrailerBySeriesId);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }

  //  delete trailer by id

  public static async deleteTrailerById(req: Request, res: Response) {
    try {
      let deleteTrailerById = await TrailerService.deleteTrailerById(req.params.id);
      res.sendStatus(200).send(deleteTrailerById);
    } catch (err) {
      res.status(500).send('Internal Server Error');
    }
  }
}
