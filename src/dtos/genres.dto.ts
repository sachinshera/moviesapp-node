import { IsString } from 'class-validator';

export class genresDto {
  @IsString()
  public name: string;
}

export class genresAssocDto {
  @IsString()
  public movies_series_id: string;
  @IsString()
  public genreId: string;
  @IsString()
  public type: string;
  @IsString()
  public status: boolean;
}
