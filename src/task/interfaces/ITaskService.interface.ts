import { AnyNaptrRecord } from "dns";
import { Task } from "../entities/Task.entity";

export interface ITaskService {
  createTasks(clientName: string, professionalName: string, taskArray: any[]): Promise<Task[]>;
  getAllTasks(): Promise<Task[]>;
}