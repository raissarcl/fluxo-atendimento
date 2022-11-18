import { Task } from "src/task/entities/Task.entity";
import { Entity } from "typeorm";

@Entity()
export class Attendance {
  id: string;
  services: Task[];

}