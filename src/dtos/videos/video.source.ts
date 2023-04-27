import { IsString, IsUrl ,IsOptional} from 'class-validator';
export class addVideosSourceDto {
  @IsString()
  public videos_id: string;
  @IsUrl()
  public source: string;
  @IsString()
  public status: string;
  @IsOptional()
  public quality: string;

  @IsOptional()
  public type: string;
}
