import { IsString, IsUrl } from 'class-validator';

export class AddThumnnailDto {
  @IsString()
  public video_id: string;
  @IsUrl()
  public thumbnail: string;
  @IsString()
  public quality: string;
  @IsString()
  public language: string;
}

export class UpdateThumnnailDto {
  @IsString()
  public video_id: string;
  @IsUrl()
  public thumbnail: string;
  @IsString()
  public quality: string;
  @IsString()
  public language: string;
}
