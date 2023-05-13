import { IsString, IsUrl, IsOptional } from 'class-validator';
export class addUpdateMoviesBannerDto {
  @IsString()
  public contentId: string;
  @IsUrl()
  public url: string;
  @IsOptional()
  @IsString()
  public quality: string;

  @IsOptional()
  @IsString()
  public status: string;
}
