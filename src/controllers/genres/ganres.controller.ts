import GenresService from '@/services/genres/genres.service';
import { Request, Response } from 'express';

export default class GenresController {
  static async createGenres(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const genres = await GenresService.createGenres(name);
      res.status(201).json(genres);
    } catch (err) {
      if (err.message === 'Genres already exists') {
        res.status(409).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  static async getAllGenres(req: Request, res: Response) {
    const genres = await GenresService.getAllGenres();
    res.status(200).json(genres);
  }
  static async getGenresById(req: Request, res: Response) {
    const { id } = req.params;
    const genres = await GenresService.getGenresById(id);
    if (genres) {
      res.status(200).json(genres);
    } else {
      res.status(404).json({ message: 'Genres not found' });
    }
  }
  static async updateGenres(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const genres = await GenresService.updateGenres(id, name);
      res.status(200).json(genres);
    } catch (err) {
      if (err.message === 'Genres already exists') {
        res.status(409).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  static async deleteGenres(req: Request, res: Response) {
    const { id } = req.params;
    const isDeleted = await GenresService.deleteGenres(id);
    if (isDeleted) {
      res.status(200).json({ message: 'Genres deleted' });
    } else {
      res.status(404).json({ message: 'Genres not found' });
    }
  }
}
