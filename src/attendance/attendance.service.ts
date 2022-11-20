import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppError } from 'src/errors/AppError.error';
import { Task } from 'src/task/entities/Task.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Attendance } from './entities/Attendance.entity';
import { IAttendanceService } from './interfaces/IAttendanceService.interface';

@Injectable()
export class AttendanceService implements IAttendanceService {

  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,
    private readonly userService: UserService,
  ) { }

  async createAttendance(clientName: string, professionalName: string, tasks: Task[]): Promise<Attendance> {

    const client = await this.userService.getClientByName(clientName);
    const professional = await this.userService.getProfessionalByName(professionalName);

    if (!client || !professional) throw new AppError("One or more accounts don't exist");

    const totals = tasks.reduce((acc, cur) => {
      acc.totalComission += cur.valueProfessional;
      acc.totalDuration += cur.amountMinutes;

      return acc;
    }, {
      totalDuration: 0,
      totalComission: 0
    });

    const attendance = this.attendanceRepository.create({
      client,
      professional,
      tasks,
      totalDuration: totals.totalDuration,
      totalComission: totals.totalComission
    });

    await this.attendanceRepository.save(attendance);

    return attendance;
  }

  async findAttendanceById(id: string): Promise<Attendance> {
    return await this.attendanceRepository.findOneBy({ id });
  }

  async startAttendance(id: string): Promise<Attendance> {
    const attendance = await this.findAttendanceById(id);

    if (!attendance) throw new AppError("Attendance doesn't exist");

    if (attendance.isActive) throw new AppError("Attendance is already active");

    Object.assign(attendance, {
      isActive: true
    });

    await this.attendanceRepository.save(attendance);

    return attendance;
  }

  async stopAttendance(id: string): Promise<Attendance> {
    const attendance = await this.findAttendanceById(id);

    if (!attendance) throw new AppError("Attendance doesn't exist");

    if (!attendance.isActive) throw new AppError("Attendance is already over");

    Object.assign(attendance, {
      isActive: false
    });

    await this.attendanceRepository.save(attendance);

    return attendance;
  }

}
