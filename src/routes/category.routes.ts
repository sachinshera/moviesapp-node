import CategoryController from '@/controllers/category.controller';
import { categoryDto, addCateAssoc } from '@/dtos/category.dto';
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
    this.router.post(`${this.path}/Assoc`, authMiddleware, validationMiddleware(addCateAssoc, 'body'), CategoryController.AddAssoc);

    this.router.put(`${this.path}/Assoc`, authMiddleware, validationMiddleware(addCateAssoc, 'body'), CategoryController.updateAssoc);

    this.router.get(`${this.path}/Assoc`, CategoryController.getAllAssoc);

    // delete assoc
    this.router.delete(`${this.path}/Assoc/:id`, authMiddleware, CategoryController.deleteAssoc);
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
