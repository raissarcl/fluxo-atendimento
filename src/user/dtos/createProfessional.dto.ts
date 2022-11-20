import { IsEmail, IsInt, IsNotEmpty, IsString, Min, } from "class-validator";

export class CreateProfessionalDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  percentage: number;
}