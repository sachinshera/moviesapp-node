import MoviesBannerController from '@/controllers/movies/movies.banner.controller';
import { addUpdateMoviesBannerDto } from '@/dtos/movies/movies.banner.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';
class MoviesBannerRoutes {
  public router: Router = Router();
  public path = '/banner';
  public moviesBannerController = new MoviesBannerController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    // get all movie banners
    this.router.get(`${this.path}`, this.moviesBannerController.getAllMovieBanners);
    // get movie banner by id
    this.router.get(`${this.path}/:id`, this.moviesBannerController.getMovieBannerById);
    // add new movie banner
    this.router.post(
      `${this.path}`,
      authMiddleware,
      validationMiddleware(addUpdateMoviesBannerDto, 'body'),
      this.moviesBannerController.addMovieBanner,
    );
    // update movie banner
    this.router.put(
      `${this.path}/:id`,
      authMiddleware,
      validationMiddleware(addUpdateMoviesBannerDto, 'body', true),
      this.moviesBannerController.updateMovieBanner,
    );

    // delete movie banner
    this.router.delete(`${this.path}/:id`, authMiddleware, this.moviesBannerController.deleteMovieBanner);
  }
}

export default MoviesBannerRoutes;
