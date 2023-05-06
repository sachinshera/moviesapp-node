import CategoryAssocService from '@/services/category/category.assoc.service';
import CategoryService from '@/services/category/category.service';
import { Request, Response } from 'express';
export default class CategoryController {
  // add assoc

  static async AddAssoc(req: Request, res: Response) {
    let data = req.body;
    if (data.type != 'movie' && data.type != 'series') {
      return res.status(400).json({
        message: 'invalid type!',
      });
    }
    try {
      let add = await CategoryAssocService.AddAssoc(data);
      res.status(200).json(add);
    } catch (e) {
      console.log('err', e);

      res.status(500).json({
        message: e.toString(),
      });
    }
  }

  static async getAllAssoc(req: Request, res: Response) {
    let get = await CategoryAssocService.getAll();
    res.status(200).json(get);
  }

  static async updateAssoc(req: Request, res: Response) {
    let body = req.body;
    try {
      let update = await CategoryAssocService.update(body);
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json({
        message: error.toString(),
      });
    }
  }
  static async createCategory(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const category = await CategoryService.createCategory(name);
      res.status(201).json(category);
    } catch (err) {
      if (err.message === 'Category already exists') {
        res.status(409).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  static async getAllCategories(req: Request, res: Response) {
    const categories = await CategoryService.getAllCategories();
    res.status(200).json(categories);
  }
  static async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;
    const category = await CategoryService.getCategoryById(id);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  }
  static async updateCategory(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const category = await CategoryService.updateCategory(id, name);
      res.status(200).json(category);
    } catch (err) {
      if (err.message === 'Category already exists') {
        res.status(409).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'Something went wrong' });
      }
    }
  }
  static async deleteCategory(req: Request, res: Response) {
    const { id } = req.params;
    const isDeleted = await CategoryService.deleteCategory(id);
    if (isDeleted) {
      res.status(200).json({ message: 'Category deleted' });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  }
}
