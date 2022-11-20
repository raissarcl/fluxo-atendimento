import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Task } from 'src/task/entities/Task.entity';
import { TaskModule } from 'src/task/task.module';
import { TaskService } from 'src/task/task.service';
import { Attendant, Client, Professional } from 'src/user/entities';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { Attendance } from './entities/Attendance.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Attendance, Task, Client, Professional, Attendant]),
    AuthModule,
    TaskModule,
    UserModule
  ],
  controllers: [AttendanceController],
  providers: [
    {
      provide: 'ATTENDANCE_SERVICE',
      useClass: AttendanceService,
    },
    {
      provide: 'TASK_SERVICE',
      useClass: TaskService
    },
    UserService
  ]
})
export class AttendanceModule { }
