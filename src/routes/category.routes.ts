import CategoryController from '@/controllers/category.controller';
import { categoryDto } from '@/dtos/category.dto';
import authMiddleware from '@/middlewares/auth.middleware';
import validationMiddleware from '@/middlewares/validation.middleware';
import { Router } from 'express';

class CategoryRoutes {
  public router = Router();
  public path = '/category';
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //    add category
    this.router.post(`${this.path}`, authMiddleware, validationMiddleware(categoryDto, 'body'), CategoryController.createCategory);

    // get all category
    this.router.get(`${this.path}`, CategoryController.getAllCategories);

    // get category by id
    this.router.get(`${this.path}/:id`, authMiddleware, CategoryController.getCategoryById);
    // delete category by id
    this.router.delete(`${this.path}/:id`, authMiddleware, CategoryController.deleteCategory);

    // update category by id
    this.router.put(`${this.path}/:id`, authMiddleware, validationMiddleware(categoryDto, 'body', true), CategoryController.updateCategory);
  }
}

export default CategoryRoutes;
