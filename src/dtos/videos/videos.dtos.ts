import { IsString } from 'class-validator';

export class addVideosDto {
  @IsString()
  public title: string;
  @IsString()
  public description: string;
  @IsString()
  public tags: string;
  @IsString()
  public status: string;
}

export class addVideosSourceDto {
  @IsString()
  public videos_id: string;
  @IsString()
  public source: string;
  @IsString()
  public status: string;
}
