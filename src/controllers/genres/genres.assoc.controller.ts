import GenresAssocService from '@/services/genres/genres.assoc.service';
import { Request, Response } from 'express';

export default class GenresAssocController {
  static async createGenresAssoc(req: Request, res: Response) {
    const { movies_series_id, genreId, type } = req.body;
    try {
      const genresAssoc = await GenresAssocService.createGenresAssoc(movies_series_id, genreId, type);
      res.status(201).json({
        success: true,
        data: genresAssoc,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message,
      });
    }
  }

  static async getAllGenresAssoc(req: Request, res: Response) {
    try {
      const genresAssoc = await GenresAssocService.getAllGenresAssoc();
      res.status(200).json(genresAssoc);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message,
      });
    }
  }

  static async getGenresAssocById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const genresAssoc = await GenresAssocService.getGenresAssocById(id);
      if (!genresAssoc) {
        return res.status(404).json({
          success: false,
          message: 'GenresAssoc not found',
        });
      }
      res.status(200).json({
        success: true,
        data: genresAssoc,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message,
      });
    }
  }

  static async updateGenresAssoc(req: Request, res: Response) {
    const { id } = req.params;
    const { movies_series_id, genreId, type } = req.body;
    try {
      const genresAssoc = await GenresAssocService.updateGenresAssoc(id, movies_series_id, genreId, type);
      if (!genresAssoc) {
        return res.status(404).json({
          success: false,
          message: 'GenresAssoc not found',
        });
      }
      res.status(200).json({
        success: true,
        data: genresAssoc,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message,
      });
    }
  }

  static async deleteGenresAssoc(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const genresAssoc = await GenresAssocService.deleteGenresAssoc(id);
      if (!genresAssoc) {
        return res.status(404).json({
          success: false,
          message: 'GenresAssoc not found',
        });
      }
      res.status(200).json({
        success: true,
        message: 'GenresAssoc deleted successfully',
        data: genresAssoc,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message,
      });
    }
  }

  // get by genres id

  static async getAllByGenreid(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const genresAssoc = await GenresAssocService.getAllByGenreId(id);
      if (!genresAssoc) {
        return res.status(404).json({
          success: false,
          message: 'GenresAssoc not found',
        });
      }
      res.status(200).json(genresAssoc);
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message,
      });
    }
  }
}
