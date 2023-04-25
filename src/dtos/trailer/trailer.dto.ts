import { IsString, IsUrl } from 'class-validator';
export class addTrailerDto {
  @IsString()
  public movies_series_id: string;
  @IsUrl()
  public url: string;
  @IsString()
  public quality: string;
  @IsString()
  public status: string;
}
