import { IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  readonly name;

  @IsString()
  readonly email;

  @IsString()
  readonly deeds;

  @IsString()
  readonly token: string;

  public password;
}
