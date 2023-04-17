import { NextFunction, Request, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { TokenService } from '@/services/token.service';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization') : null);

    if (Authorization) {
      // veryfy token
      const verifyToken = await TokenService.verifyToken(Authorization);
      if (verifyToken) {
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(401, 'Wrong authentication token'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
