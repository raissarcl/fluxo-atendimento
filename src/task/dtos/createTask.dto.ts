import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateTaskDto {

  @IsNotEmpty()
  @IsString()
  taskType: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  value: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  amountMinutes: number;

  @IsNotEmpty()
  @IsString()
  professionalName: string;
}