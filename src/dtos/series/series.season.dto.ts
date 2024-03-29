import { IsString, IsOptional } from 'class-validator';
export class addSeriesSeasonDto {
  @IsString()
  public video_id: string;
  @IsString()
  public description: string;
  @IsOptional()
  public trailer: string;
  @IsOptional()
  public image: string;
  @IsOptional()
  public status: string;
}
