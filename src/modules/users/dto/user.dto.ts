import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: number;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;
}
