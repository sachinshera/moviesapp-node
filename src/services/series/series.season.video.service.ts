import { SeriesSeasonVideosModel } from '@/models/series/series.season.videos.model';
import { SeriesSeasonsModel } from '@/models/series/series.seasons.model';
import { nanoid } from 'nanoid';

export default class SeriesSeasonVideoService {
  // add new video to season
  public static async addVideoToSeason(seriesId: string, seasonId: string, video: SeriesSeasonVideosModel) {
    try {
      // check if season exists
      const season = await SeriesSeasonsModel.findOne({
        where: {
          id: seasonId,
          series_id: seriesId,
        },
      });

      if (!season) {
        throw new Error('Season not found');
      }

      // check if video already exists

      const videoExists = await SeriesSeasonVideosModel.findOne({
        where: {
          season_id: seasonId,
          video: video.video,
          series_id: seriesId,
        },
      });

      if (videoExists) {
        throw new Error('Video already exists');
      }

      // add video to season

      const addVideo = await SeriesSeasonVideosModel.create({
        id: nanoid(),
        series_id: seriesId,
        season_id: seasonId,
        ...video,
      });

      return addVideo;
    } catch (err) {
      throw err;
    }
  }

  //   get all videos in season
  public static async getAllVideosInSeason(seriesId: string, seasonId: string) {
    // check if season exists
    const season = await SeriesSeasonsModel.findOne({
      where: {
        id: seasonId,
        series_id: seriesId,
      },
    });

    if (!season) {
      throw new Error('Season not found');
    }

    // get all videos in season
    const videos = await SeriesSeasonVideosModel.findAll({
      where: {
        series_id: seriesId,
        season_id: seasonId,
      },
    });

    return videos;
  }

  // update video in season
  public static async updateVideoInSeason(seriesId: string, seasonId: string, videoId: string, video: SeriesSeasonVideosModel) {
    try {
      // check if season exists
      const season = await SeriesSeasonsModel.findOne({
        where: {
          id: seasonId,
          series_id: seriesId,
        },
      });

      if (!season) {
        throw new Error('Season not found');
      }

      // check if video exists
      const videoExists = await SeriesSeasonVideosModel.findOne({
        where: {
          id: videoId,
          series_id: seriesId,
          season_id: seasonId,
        },
      });

      if (!videoExists) {
        throw new Error('Video not found');
      }

      // update video
      const updateVideo = await SeriesSeasonVideosModel.update(
        {
          ...video,
        },
        {
          where: {
            id: videoId,
            series_id: seriesId,
            season_id: seasonId,
          },
        },
      );

      //   return updated video
      const updatedVideo = await SeriesSeasonVideosModel.findOne({
        where: {
          id: videoId,
          series_id: seriesId,
          season_id: seasonId,
        },
      });

      return updatedVideo;
    } catch (err) {
      throw err;
    }
  }

  //   // delete video from season
  public static async deleteVideoFromSeason(seriesId: string, seasonId: string, videoId: string) {
    try {
      // check if season exists
      const season = await SeriesSeasonsModel.findOne({
        where: {
          id: seasonId,
          series_id: seriesId,
        },
      });

      if (!season) {
        throw new Error('Season not found');
      }

      // check if video exists
      const videoExists = await SeriesSeasonVideosModel.findOne({
        where: {
          id: videoId,
          series_id: seriesId,
          season_id: seasonId,
        },
      });

      if (!videoExists) {
        throw new Error('Video not found');
      }

      // delete video
      const deleteVideo = await SeriesSeasonVideosModel.destroy({
        where: {
          id: videoId,
          series_id: seriesId,
          season_id: seasonId,
        },
      });

      return 'Video deleted';
    } catch (err) {
      throw err;
    }
  }
}
