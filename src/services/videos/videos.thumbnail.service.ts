import { VideosModel } from '@/models/videos/videos.model';
import { VideosThumbnailsModel } from '@/models/videos/videos.thumnails.model';
import { nanoid } from 'nanoid';
export default class VideosThumbnailsService {
  // add new video thumbnail
  public static async addVideoThumbnail(data: any) {
    const video = await VideosModel.findOne({
      where: {
        id: data.video_id,
      },
    });
    if (video) {
      // check exist thumbnail
      const existThumbnail = await VideosThumbnailsModel.findOne({
        where: {
          videoId: data.video_id,
          thumbnail: data.thumbnail,
        },
      });

      if (existThumbnail) {
        throw new Error('Thumbnail already exist');
      }
      const videoThumbnail = await VideosThumbnailsModel.create({
        id: nanoid(),
        videoId: data.video_id,
        status: data.status ? data.status.status : 'active',
        ...data,
      });
      return videoThumbnail;
    } else {
      throw new Error('Video not found');
    }
  }

  //   get all video thumbnails by video id
  public static async getVideoThumbnails(videoId: string) {
    const video = await VideosModel.findOne({
      where: {
        id: videoId,
      },
    });
    if (video) {
      const videoThumbnails = await VideosThumbnailsModel.findAll({
        where: {
          videoId: videoId,
        },
      });
      return videoThumbnails;
    } else {
      //   throw error as json
      throw new Error('Video not found');
    }
  }

  //   get thumbnail by id
  public static async getVideoThumbnailById(id: string) {
    const videoThumbnail = await VideosThumbnailsModel.findOne({
      where: {
        id: id,
      },
    });
    return videoThumbnail;
  }

  //   delete video thumbnail by id

  public static async deleteVideoThumbnailById(id: string) {
    const videoThumbnail = await VideosThumbnailsModel.findOne({
      where: {
        id: id,
      },
    });
    if (videoThumbnail) {
      await VideosThumbnailsModel.destroy({
        where: {
          id: id,
        },
      });
      return videoThumbnail;
    } else {
      throw new Error('Video thumbnail not found');
    }
  }
  //   update video thumbnail by id
  public static async updateVideoThumbnailById(id: string, data: any) {
    const videoThumbnail = await VideosThumbnailsModel.findOne({
      where: {
        id: id,
      },
    });
    if (videoThumbnail) {
      await VideosThumbnailsModel.update(
        {
          ...data,
        },
        {
          where: {
            id: id,
          },
        },
      );
      return videoThumbnail;
    } else {
      throw new Error('Video thumbnail not found');
    }
  }
}
