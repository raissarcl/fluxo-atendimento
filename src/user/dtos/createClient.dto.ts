import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, } from "class-validator";

export class CreateClientDto {

  @ApiProperty({
    type: "string",
    description: "Client's name"
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
}