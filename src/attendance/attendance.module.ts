import { Module } from '@nestjs/common';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';

@Module({
  controllers: [AttendanceController],
  providers: [{
    provide: 'ATTENDANCE_SERVICE',
    useClass: AttendanceService,
  }]
})
export class AttendanceModule { }
