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
]);
app.listen();
