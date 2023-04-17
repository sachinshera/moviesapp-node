import { IsString } from 'class-validator';

export class tokenDto {
  @IsString()
  public token: string;
}

export class RefreshtokenDto {
  @IsString()
  public token: string;
  @IsString()
  public username: string;
}
