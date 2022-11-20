import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Task } from "src/task/entities/Task.entity";

export class createAttendanceDto {

  @IsNotEmpty()
  @IsString()
  professional: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Task)
  tasks: Task[];
}