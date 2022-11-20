import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { CreateTaskDto } from "src/task/dtos/createTask.dto";
import { Task } from "src/task/entities/Task.entity";

export class createAttendanceDto {

  @IsNotEmpty()
  @IsString()
  professional: string;

  @IsNotEmpty()
  @IsArray()
  tasks: any[];
}