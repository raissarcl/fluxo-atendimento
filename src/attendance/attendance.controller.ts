import { Controller, Inject, Post } from '@nestjs/common';
import { IAttendanceService } from './interfaces/IAttendanceService.interface';

@Controller('attendance')
export class AttendanceController {
  constructor(
    @Inject('ATTENDANCE_SERVICE')
    private readonly attendanceService: IAttendanceService
  ) { }


  @Post()
  async getAttendance() {

  }
}
