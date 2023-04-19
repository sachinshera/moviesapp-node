import { GenresModel } from '@/models/genres.model';
import { nanoid } from 'nanoid';

export default class GenresService {
  static async createGenres(name: string): Promise<GenresModel> {
    // ccheck if genres already exists
    const genresExists = await GenresModel.findOne({ where: { name } });
    if (genresExists) {
      throw new Error('Genres already exists');
    }
    const genres = new GenresModel();
    genres.id = nanoid(20);
    genres.name = name;
    await genres.save();
    return genres;
  }
  static async getAllGenres(): Promise<GenresModel[]> {
    return await GenresModel.findAll();
  }
  static async getGenresById(id: string): Promise<GenresModel | null> {
    return await GenresModel.findOne({ where: { id } });
  }
  static async updateGenres(id: string, name: string): Promise<GenresModel | null> {
    try {
      // ccheck if genres already exists
      const genresExists = await GenresModel.findOne({ where: { name } });
      if (genresExists) {
        throw new Error('Genres already exists');
      }
      //   update genres
      await GenresModel.update({ name }, { where: { id } });
      return await GenresModel.findOne({ where: { id } });
    } catch (err) {
      throw new Error(err);
    }
  }
  static async deleteGenres(id: string): Promise<boolean> {
    const genres = await GenresModel.findOne({ where: { id } });
    if (genres) {
      await genres.destroy();
      return true;
    }
    return false;
  }
}
