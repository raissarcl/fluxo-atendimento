import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entities/Attendance.entity';
import { IAttendanceService } from './interfaces/IAttendanceService.interface';

@Injectable()
export class AttendanceService implements IAttendanceService {

  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>
  ) { }

}
