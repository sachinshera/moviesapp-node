import { IsString, IsOptional, IsEnum } from 'class-validator';

export class categoryDto {
  @IsString()
  public name: string;
}

export class addCateAssoc {
  @IsString()
  public series_movie_id: string;
  @IsString()
  public type: string;
  @IsOptional()
  public status: boolean;
}
