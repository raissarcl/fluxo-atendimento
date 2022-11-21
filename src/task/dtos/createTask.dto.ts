import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateTaskDto {

  @ApiProperty({
    type: 'string',
    description: "The task's defined type"
  })
  @IsNotEmpty()
  @IsString()
  taskType: string;

  @ApiProperty({
    type: 'number',
    description: "The task's value"
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  value: number;

  @ApiProperty({
    type: 'number',
    description: "the amount of time for the task completion"
  })
  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amountMinutes: number;

  @ApiProperty({
    type: 'string',
    description: "The professional's name"
  })
  @IsNotEmpty()
  @IsString()
  professionalName: string;
}