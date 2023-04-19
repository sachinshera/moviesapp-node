import { IsString, IsOptional } from 'class-validator';
export class addSeasonVideoDTO {
  @IsString()
  public video: string;
  @IsOptional()
  public status: string;
}
