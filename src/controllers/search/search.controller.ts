import SearchService from '@/services/search/search.service';
import { Request, Response } from 'express';
export class SearchController {
  static async search(req: Request, res: Response) {
    let query = req.params.query;
    try {
      let search = await SearchService.search(query);
      res.status(200).send(search);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
}
