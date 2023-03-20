import { Exclude } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  // @Exclude()
  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
