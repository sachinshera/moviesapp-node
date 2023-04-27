import { VideosSourceModel } from '@/models/videos/video.souce.model';
import { VideosModel } from '@/models/videos/videos.model';
import { nanoid } from 'nanoid';

export class VideosSoureService {
  public static async addVideosSource(data: any) {
    // check video is valid or not
    let checkVideo = await VideosModel.findOne({
      where: {
        id: data.videos_id,
      },
    });
    if (!checkVideo) {
      return 'invalid video id';
    }

    // check videos source is already exist
    let checkExist = await VideosSourceModel.findOne({
      where: {
        videoId: data.videos_id,
        source: data.source,
      },
    });

    if (checkExist) {
      return 'videos source already exist';
    }
    try {
      const videosSource = await VideosSourceModel.create({
        id: nanoid(),
        videoId: data.videos_id,
        source: data.source,
        type: data.type ? data.type : 'video',
        status: data.status ? data.status : 'active',
        quality: data.quality ? data.quality : '720p',
        language: data.language ? data.language : 'en',
      });
      return videosSource;
    } catch (error) {
      throw new Error(error);
      console.log(error);
    }
  }

  public static async updateVideosSource(id: string, data: any) {
    const videosSource = await VideosSourceModel.update(
      {
        videoId: data.videoId,
        source: data.source,
        type: data.type ? data.type : 'video',
        status: data.status ? data.status : 'active',
        quality: data.quality ? data.quality : '720p',
        language: data.language ? data.language : 'en',
      },
      {
        where: {
          id: id,
        },
      },
    );
    return videosSource;
  }

  public static async changeStatusVideosSource(id: string, data: any) {
    const videosSource = await VideosSourceModel.update(
      {
        status: data.status,
      },
      {
        where: {
          id: id,
        },
      },
    );
    return videosSource;
  }

  public static async getVideosSourceByVideoId(id: string) {
    const videosSource = await VideosSourceModel.findAll({
      where: {
        video_id: id,
      },
    });
    return videosSource;
  }

  public static async getSourceById(id: string) {
    const source = await VideosSourceModel.findOne({
      where: {
        id: id,
      },
    });
    return source;
  }

  public static async deleteVideosSource(id: string) {
    const videosSource = await VideosSourceModel.destroy({
      where: {
        id: id,
      },
    });
    return videosSource;
  }
}
