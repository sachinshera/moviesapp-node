import { TrailerModel } from '@/models/trailer/trailer.model';
import { nanoid } from 'nanoid';

export default class TrailerService {
  // get all trailers
  static async getAllTrailers() {
    const trailers = await TrailerModel.findAll();
    return trailers ? trailers : [];
  }
  static async createTrailer(data: TrailerModel) {
    try {
      const trailer = await TrailerModel.create({
        id: nanoid(),
        ...data,
      });
      return trailer;
    } catch (err) {
      console.log(err);
    }
  }

  static async getTrailerByMovieId(movieId: string) {
    const trailer = await TrailerModel.findOne({
      where: {
        movies_series_id: movieId,
      },
    });
    return trailer;
  }

  static async getTrailerBySeriesId(seriesId: string) {
    const trailer = await TrailerModel.findOne({
      where: {
        movies_series_id: seriesId,
      },
    });
    return trailer;
  }

  static async updateTrailerByMovieId(movieId: string, data: TrailerModel) {
    const { url, quality } = data;
    const trailer = await TrailerModel.update(
      {
        url,
        quality,
      },
      {
        where: {
          movies_series_id: movieId,
        },
      },
    );
    return trailer;
  }

  static async updateTrailerBySeriesId(seriesId: string, data: any) {
    const { url, quality } = data;
    const trailer = await TrailerModel.update(
      {
        url,
        quality,
      },
      {
        where: {
          movies_series_id: seriesId,
        },
      },
    );
    return trailer;
  }

  static async deleteTrailerByMovieId(movieId: string) {
    const trailer = await TrailerModel.destroy({
      where: {
        movies_series_id: movieId,
      },
    });
    return trailer;
  }

  static async deleteTrailerBySeriesId(seriesId: string) {
    const trailer = await TrailerModel.destroy({
      where: {
        movies_series_id: seriesId,
      },
    });
    return trailer;
  }

  // delete trailer by id

  static async deleteTrailerById(id: string) {
    const trailer = await TrailerModel.destroy({
      where: {
        id,
      },
    });
    return trailer;
  }
}
