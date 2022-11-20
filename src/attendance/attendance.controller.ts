import { Body, ClassSerializerInterceptor, Controller, Get, Inject, Param, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { RolesGuard, Roles, Role } from 'src/auth/roles';
import { ITaskService } from 'src/task/interfaces/ITaskService.interface';
import { createAttendanceDto } from './dtos/createAttendance.dto';
import { Attendance } from './entities/Attendance.entity';
import { IAttendanceService } from './interfaces/IAttendanceService.interface';

@Controller('attendance')
export class AttendanceController {
  constructor(
    @Inject('ATTENDANCE_SERVICE')
    private readonly attendanceService: IAttendanceService,
    @Inject('TASK_SERVICE')
    private readonly taskService: ITaskService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createAttendance(@Req() req, @Body() { professional, tasks }: createAttendanceDto) {

    const client = req.user;

    const readyTasks = await this.taskService.createTasks(client.name, professional, tasks);

    const attendance = await this.attendanceService.createAttendance(client.name, professional, readyTasks);

    return {
      msg: 'Created attendance',
      id: attendance.id,
      isActive: attendance.isActive
    }
  };

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('/startattendance/:id')
  async startAttendance(@Param('id') id: string) {

    const attendance = await this.attendanceService.startAttendance(id);

    return {
      msg: "Attendance started",
      id: attendance.id,
      isActive: attendance.isActive,
    };
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('stopattendance/:id')
  async stopAttendance(@Param('id') id: string) {

    const attendance = await this.attendanceService.stopAttendance(id);


    return {
      msg: "Attendance and resume",
      client: attendance.client,
      duration: `${attendance.totalDuration} minutos totais`,
      commission: `${attendance.totalComission} reais de comissão`,
      isActive: attendance.isActive
    };
  }

}
