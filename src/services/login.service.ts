import { AdminUserModel } from '@/models/admin.user.model';
import { TokenService } from './token.service';
export class LoginServie {
  public static async login(username: string, password: string) {
    let findUser: any = await AdminUserModel.findOne({
      where: {
        username: username,
        password: password,
      },
    });
    if (findUser) {
      // delete privous tokens
      await TokenService.removeAllTokensByUserId(username);
      let token = await TokenService.gererateToken(username);
      if (token) {
        return token;
      } else {
        return 'error in token generation';
      }
    } else {
      return 'user not found';
    }
  }
}
