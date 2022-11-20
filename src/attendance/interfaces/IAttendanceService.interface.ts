import { Task } from "src/task/entities/Task.entity";
import { Attendance } from "../entities/Attendance.entity";

export interface IAttendanceService {
  createAttendance(clientName: string, professionalName: string, tasks: Task[]): Promise<Attendance>;
  findAttendanceById(id: string): Promise<Attendance>;
  startAttendance(id: string): Promise<Attendance>;
  stopAttendance(id: string): Promise<Attendance>;
}