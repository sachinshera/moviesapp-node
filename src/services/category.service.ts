import { CategoryModel } from '@/models/category.model';
import { nanoid } from 'nanoid';

export default class CategoryService {
  static async createCategory(name: string): Promise<CategoryModel> {
    // ccheck if category already exists
    const categoryExists = await CategoryModel.findOne({ where: { name } });
    if (categoryExists) {
      throw new Error('Category already exists');
    }
    const category = new CategoryModel();
    category.id = nanoid(20);
    category.name = name;
    await category.save();
    return category;
  }
  static async getAllCategories(): Promise<CategoryModel[]> {
    return await CategoryModel.findAll();
  }
  static async getCategoryById(id: string): Promise<CategoryModel | null> {
    return await CategoryModel.findOne({ where: { id } });
  }
  static async updateCategory(id: string, name: string): Promise<CategoryModel | null> {
    try {
      // ccheck if category already exists
      const categoryExists = await CategoryModel.findOne({ where: { name } });
      if (categoryExists) {
        throw new Error('Category already exists');
      }
      //   update category
      await CategoryModel.update({ name }, { where: { id } });
      return await CategoryModel.findOne({ where: { id } });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async deleteCategory(id: string): Promise<boolean> {
    const category = await CategoryModel.findOne({ where: { id } });
    if (category) {
      await category.destroy();
      return true;
    }
    return false;
  }
}
