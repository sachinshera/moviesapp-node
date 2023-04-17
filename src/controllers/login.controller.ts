import { LoginServie } from '@/services/login.service';
import { TokenService } from '@/services/token.service';
import { Request, Response } from 'express';
export class LoginController {
  public static async login(req: Request, res: Response) {
    let username = req.body.username;
    let password = req.body.password;
    try {
      let loginResult = await LoginServie.login(username, password);
      if (loginResult == 'user not found') {
        return res.status(404).json({
          message: 'INVALID CREDENTIALS',
        });
      }
      if (loginResult == 'error in token generation') {
        return res.status(500).json({
          message: 'INTERNAL SERVER ERROR',
        });
      } else {
        return res.status(200).json({
          message: 'LOGIN SUCCESS',
          token: loginResult,
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'INTERNAL SERVER ERROR',
      });
    }
  }

  // verifytoken

  public static async verifyToken(req: Request, res: Response) {
    let token = req.body.token;
    try {
      let verifyToken = await TokenService.verifyToken(token);
      if (verifyToken) {
        return res.status(200).json({
          message: 'TOKEN VERIFIED',
        });
      } else {
        return res.status(404).json({
          message: 'INVALID TOKEN',
        });
      }
    } catch (err) {
      res.status(500).json({
        message: 'INTERNAL SERVER ERROR',
      });
    }
  }

  // refresh token

  public static async refreshToken(req: Request, res: Response) {
    let token = req.body.token;
    let userame = req.body.username;
    try {
      let verifyToken = await TokenService.verifyToken(token);
      // delete privous tokens
      await TokenService.removeAllTokensByUserId(userame);
      if (verifyToken) {
        let newToken = await TokenService.gererateToken(userame);
        if (!newToken) {
          console.log('64', newToken);
          return res.status(500).json({
            message: 'INTERNAL SERVER ERROR',
          });
        } else {
          return res.status(200).json({
            message: 'TOKEN REFRESHED',
            token: newToken,
          });
        }
      } else {
        return res.status(404).json({
          message: 'INVALID TOKEN',
        });
      }
    } catch (err) {
      console.log('79', err);
      res.status(500).json({
        message: 'INTERNAL SERVER ERROR',
      });
    }
  }
}
