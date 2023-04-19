import { IsString } from 'class-validator';

export class genresDto {
  @IsString()
  public name: string;
}
