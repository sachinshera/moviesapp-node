import { SearchController } from '@/controllers/search/search.controller';
import { Router } from 'express';

class SearchRoutes {
  public router = Router();
  public path = '/search';
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/:query`, SearchController.search);
  }
}

export default SearchRoutes;
