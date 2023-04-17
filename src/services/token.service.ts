import { SessionTokenModel } from './../models/session.token.model';
import bcrypt from 'bcrypt';
export class TokenService {
  public static async gererateToken(userid: string): Promise<string | boolean> {
    let hash = bcrypt.hashSync(new Date().getTime().toString(), 10);
    //  set one day expiry
    let expire_in = new Date().getTime() + 24 * 60 * 60 * 1000;
    //  store
    let create = await SessionTokenModel.create({
      token: hash,
      expires_in: expire_in,
      userId: userid,
    });

    if (create) {
      return hash;
    } else {
      return false;
    }
  }

  public static async verifyToken(token: string): Promise<boolean> {
    let findToken = await SessionTokenModel.findOne({
      where: {
        token: token,
      },
    });
    if (findToken) {
      return true;
    } else {
      return false;
    }
  }

  // remove token

  public static async removeToken(token: string): Promise<boolean> {
    let findToken = await SessionTokenModel.destroy({
      where: {
        token: token,
      },
    });

    if (findToken) {
      return true;
    } else {
      return false;
    }
  }

  //   // remove all tokens by user id
  public static async removeAllTokensByUserId(userid: string): Promise<boolean> {
    let findToken = await SessionTokenModel.destroy({
      where: {
        userId: userid,
      },
    });

    if (findToken) {
      return true;
    } else {
      return false;
    }
  }
}
