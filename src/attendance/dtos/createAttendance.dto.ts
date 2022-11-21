import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
export class createAttendanceDto {

  @ApiProperty({
    type: "string",
    description: "The professional's name"
  })
  @IsNotEmpty()
  @IsString()
  professional: string;

  @ApiProperty({
    type: ["string"],
    description: "the task's array"
  })
  @IsNotEmpty()
  @IsArray()
  tasks: any[];
}