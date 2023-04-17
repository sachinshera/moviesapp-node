import { VideosSourceModel } from '@/models/videos/video.souce.model';
import { VideosModel } from '@/models/videos/videos.model';
import { VideosThumbnailsModel } from '@/models/videos/videos.thumnails.model';
import { nanoid } from 'nanoid';
nanoid;
export class VideosService {
  public static async getVideos() {
    return await VideosModel.findAll();
  }
  //   add videos

  public static async addVideos(data: any) {
    //  check videos is already exist

    try {
      const videosExist = await VideosModel.findOne({
        where: {
          title: data.title,
        },
      });
      if (videosExist) {
        // create sequelize error

        return 'videos already exist';
      }
      const videos = await VideosModel.create({
        id: nanoid(),
        title: data.title,
        description: data.description,
        tags: data.tags,
        status: data.status ? data.status : 'active',
        language: data.language ? data.language : 'en',
      });

      return videos;
    } catch (err) {
      return err;
    }
  }

  //   add videos source

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
        video_id: data.videos_id,
        source: data.source,
      },
    });

    if (checkExist) {
      return 'videos source already exist';
    }
    const videosSource = await VideosSourceModel.create({
      id: nanoid(),
      video_id: data.videos_id,
      source: data.source,
      type: data.type ? data.type : 'video',
      status: data.status ? data.status : 'active',
      quality: data.quality ? data.quality : '720p',
      language: data.language ? data.language : 'en',
    });
    return videosSource;
  }

  //   add videos thumbnails

  public static async addVideosThumbnails(data: any) {
    const videosThumbnails = await VideosThumbnailsModel.create({
      id: nanoid(),
      videoId: data.videoId,
      source: data.source,
      status: data.status ? data.status : 'active',
      language: data.language ? data.language : 'en',
    });
    return videosThumbnails;
  }

  //   delete videos

  public static async deleteVideos(id: string) {
    const videos = await VideosModel.destroy({
      where: {
        id: id,
      },
    });
    return videos;
  }

  //   delete videos source

  public static async deleteVideosSource(id: string) {
    const videosSource = await VideosSourceModel.destroy({
      where: {
        id: id,
      },
    });
    return videosSource;
  }

  //   delete videos thumbnails

  public static async deleteVideosThumbnails(id: string) {
    const videosThumbnails = await VideosThumbnailsModel.destroy({
      where: {
        id: id,
      },
    });
    return videosThumbnails;
  }

  //   update videos

  public static async updateVideos(id: string, data: any) {
    const videos = await VideosModel.update(
      {
        title: data.title,
        description: data.description,
        tags: data.tags,
        status: data.status ? data.status : 'active',
        language: data.language ? data.language : 'en',
      },
      {
        where: {
          id: id,
        },
      },
    );
    return videos;
  }

  //   update videos source

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

  //   update videos thumbnails

  public static async updateVideosThumbnails(id: string, data: any) {
    const videosThumbnails = await VideosThumbnailsModel.update(
      {
        videoId: data.videoId,
        source: data.source,
        status: data.status ? data.status : 'active',
        language: data.language ? data.language : 'en',
      },
      {
        where: {
          id: id,
        },
      },
    );
    return videosThumbnails;
  }

  //   change status videos

  public static async changeStatusVideos(id: string, data: any) {
    const videos = await VideosModel.update(
      {
        status: data.status,
      },
      {
        where: {
          id: id,
        },
      },
    );
    return videos;
  }

  //   change status videos source

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

  //   change status videos thumbnails

  public static async changeStatusVideosThumbnails(id: string, data: any) {
    const videosThumbnails = await VideosThumbnailsModel.update(
      {
        status: data.status,
      },
      {
        where: {
          id: id,
        },
      },
    );
    return videosThumbnails;
  }

  //   get videos by id
  public static async getVideosById(id: string) {
    const videos = await VideosModel.findOne({
      where: {
        id: id,
      },
    });
    return videos;
  }

  //   get videos source by video id

  public static async getVideosSourceByVideoId(id: string) {
    const videosSource = await VideosSourceModel.findAll({
      where: {
        video_id: id,
      },
    });
    return videosSource;
  }

  //   get videos thumbnails by video id

  public static async getVideosThumbnailsByVideoId(id: string) {
    const videosThumbnails = await VideosThumbnailsModel.findAll({
      where: {
        videoId: id,
      },
    });
    return videosThumbnails;
  }
  //   get souce by id

  public static async getSourceById(id: string) {
    const source = await VideosSourceModel.findOne({
      where: {
        id: id,
      },
    });
    return source;
  }
}
