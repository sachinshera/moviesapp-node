import { CategoryAssocModel } from '@/models/category/category.assoc.model';
import { nanoid } from 'nanoid';
export default class CategoryAssocService {
  static async AddAssoc(data: CategoryAssocModel) {
    try {
      let add = CategoryAssocModel.findOrCreate({
        where: {
          series_movie_id: data.series_movie_id,
        },
        defaults: {
          id: nanoid(),
          ...data,
        },
      });
      return add;
    } catch (e) {
      throw new Error('Failed to add !');
    }
  }

  static async getAll() {
    return await CategoryAssocModel.findAll();
  }

  static async update(data: CategoryAssocModel) {
    try {
      let update = await CategoryAssocModel.update(data, {
        where: {
          series_movie_id: data.series_movie_id,
        },
      });
      return update;
    } catch (error) {
      throw new Error('Failed to update');
    }
  }
}
