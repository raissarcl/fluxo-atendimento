import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { Attendance } from './entities/Attendance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendance])
  ],
  controllers: [AttendanceController],
  providers: [{
    provide: 'ATTENDANCE_SERVICE',
    useClass: AttendanceService,
  }]
})
export class AttendanceModule { }
