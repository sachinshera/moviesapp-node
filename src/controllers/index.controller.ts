import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        meassage: 'welcome to watch plus api',
        'api docs': 'http://localhost:3000/api-docs',
      });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
