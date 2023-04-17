import { LoginController } from '@/controllers/login.controller';
import { adminLoginDto } from '@/dtos/admin.users.dto';
import { RefreshtokenDto, tokenDto } from '@/dtos/token.dto';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class LoginRoutes {
  public router = Router();
  public path = '/login';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, validationMiddleware(adminLoginDto, 'body'), LoginController.login);
    // verify token
    this.router.post(`${this.path}/verifytoken`, validationMiddleware(tokenDto, 'body'), LoginController.verifyToken);

    // refresh token
    this.router.post(`${this.path}/refreshtoken`, validationMiddleware(RefreshtokenDto, 'body'), LoginController.refreshToken);
  }
}

export default LoginRoutes;
