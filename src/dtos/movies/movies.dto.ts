import { IsString } from 'class-validator';
export class addMoviesDto {
  @IsString()
  public title: string;
  @IsString()
  public description: string;
  @IsString()
  public video_id: string;
}
