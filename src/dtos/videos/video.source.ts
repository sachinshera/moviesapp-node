import { IsString, IsUrl } from 'class-validator';
export class addVideosSourceDto {
  @IsString()
  public videos_id: string;
  @IsUrl()
  public source: string;
  @IsString()
  public status: string;
}
