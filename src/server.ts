import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import LoginRoutes from '@routes/login.routes';
import validateEnv from '@utils/validateEnv';
import VideosRoutes from './routes/videos.routes';

validateEnv();

const app = new App([new IndexRoute(), new LoginRoutes(), new VideosRoutes()]);
app.listen();
