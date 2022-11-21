import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsInt, IsNotEmpty, IsString, Min, } from "class-validator";

export class CreateProfessionalDto {

  @ApiProperty({
    type: "string",
    description: "Professional's name"
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    type: "string",
    description: "Client's email"
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({
    type: "string",
    description: "Client's password"
  })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({
    type: "string",
    description: "Client's job percentage comission"
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  percentage: number;
}