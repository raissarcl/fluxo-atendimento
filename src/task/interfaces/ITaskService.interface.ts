import { Task } from "../entities/Task.entity";

export interface ITaskService {
  createTasks(clientName: string, professionalName: string, taskArray: Task[]): Promise<Task[]>;
  getAllTasks(): Promise<Task[]>;
}