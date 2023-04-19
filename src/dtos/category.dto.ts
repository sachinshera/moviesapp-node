import { IsString } from 'class-validator';

export class categoryDto {
  @IsString()
  public name: string;
}
