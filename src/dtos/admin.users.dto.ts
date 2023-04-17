import { IsString } from 'class-validator';

export class adminLoginDto {
  @IsString()
  public username: string;

  @IsString()
  public password: string;
}
