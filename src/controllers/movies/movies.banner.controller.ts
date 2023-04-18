import MoviesBannerService from '@/services/movies/movies.banner.service';
import { Request, Response } from 'express';

export default class MoviesBannerController {
  // add new movie banner
  public async addMovieBanner(req: Request, res: Response) {
    try {
      const movieBanner = await MoviesBannerService.addMovieBanner(req.body);

      res.status(200).json(movieBanner);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // get all movie banners
  public async getAllMovieBanners(req: Request, res: Response) {
    try {
      const movieBanners = await MoviesBannerService.getAllMovieBanners();
      res.status(200).json(movieBanners);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // get movie banner by id
  public async getMovieBannerById(req: Request, res: Response) {
    try {
      const movieBanner = await MoviesBannerService.getMovieBannerById(req.params.id);
      res.status(200).json(movieBanner);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // update movie banner
  public async updateMovieBanner(req: Request, res: Response) {
    try {
      let data = req.body as any;
      let id = req.params.id;
      data.id = id;
      const movieBanner = await MoviesBannerService.updateMovieBanner(data);
      res.status(200).json(movieBanner);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }

  // delete movie banner
  public async deleteMovieBanner(req: Request, res: Response) {
    try {
      const movieBanner = await MoviesBannerService.deleteMovieBanner(req.params.id);
      res.status(200).json(movieBanner);
    } catch (error) {
      if (error.message) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  }
}
