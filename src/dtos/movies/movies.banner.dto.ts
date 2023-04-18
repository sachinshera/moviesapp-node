import { IsString, IsUrl } from 'class-validator';
export class addUpdateMoviesBannerDto {
  @IsString()
  public movie_id: string;
  @IsUrl()
  public banner_image: string;
}
