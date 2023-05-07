import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import LoginRoutes from '@routes/login.routes';
import validateEnv from '@utils/validateEnv';
import VideosRoutes from './routes/videos/videos.routes';
import VideosSourceRoutes from './routes/videos/videos.source.routes';
import VideosThumbnailsRoutes from './routes/videos/videos.thumnail.routes';
import MoviesRoutes from './routes/movies/movies.routes';
import MoviesBannerRoutes from './routes/movies/movies.banner.routes';
import SeriesRoutes from './routes/series/series.routes';
import SeriesSeasonRoutes from './routes/series/series.season.routes';
import SeriesSeasonVideoRoutes from './routes/series/series.season.video.routes';
import CategoryRoutes from './routes/category.routes';
import GenresRoutes from './routes/genres/genres.routes';
import TrailerRoutes from './routes/trailer/trailer.routes';
import SearchRoutes from './routes/search/search.routes';
import GenresAssocRoutes from './routes/genres/genrs.assoc.routes';
validateEnv();

const app = new App([
  new IndexRoute(),
  new LoginRoutes(),
  new VideosRoutes(),
  new VideosSourceRoutes(),
  new AuthRoute(),
  new UsersRoute(),
  new VideosThumbnailsRoutes(),
  new MoviesBannerRoutes(),
  new MoviesRoutes(),
  new SeriesSeasonVideoRoutes(),
  new SeriesSeasonRoutes(),
  new SeriesRoutes(),
  new CategoryRoutes(),
  new GenresAssocRoutes(),
  new GenresRoutes(),
  new TrailerRoutes(),
  new SearchRoutes(),
]);
app.listen();
