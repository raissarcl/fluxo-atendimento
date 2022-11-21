import { Body, ClassSerializerInterceptor, Controller, Get, Inject, Param, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { RolesGuard, Roles, Role } from 'src/auth/roles';
import { ITaskService } from 'src/task/interfaces/ITaskService.interface';
import { createAttendanceDto } from './dtos/createAttendance.dto';
import { Attendance } from './entities/Attendance.entity';
import { IAttendanceService } from './interfaces/IAttendanceService.interface';

@ApiBearerAuth()
@ApiTags('Attendance')
@Controller('attendance')
export class AttendanceController {
  constructor(
    @Inject('ATTENDANCE_SERVICE')
    private readonly attendanceService: IAttendanceService,
    @Inject('TASK_SERVICE')
    private readonly taskService: ITaskService,
  ) { }


  @ApiResponse({ status: 201, description: 'The attendance has been created' })
  @ApiResponse({ status: 401, description: 'Not authorized' })
  @UseGuards(JwtAuthGuard)
  @Post()
  async createAttendance(@Req() req, @Body() { professional, tasks }: createAttendanceDto) {

    const client = req.user;

    const readyTasks = await this.taskService.createTasks(client.name, professional, tasks);

    const attendance = await this.attendanceService.createAttendance(client.name, professional, readyTasks);

    return {
      msg: 'Created attendance',
      id: attendance.id,
      client: attendance.client.name,
      professional: attendance.professional.name,
      isActive: attendance.isActive,
    }
  };

  @ApiResponse({ status: 200, description: 'Attendance has started' })
  @ApiResponse({ status: 401, description: 'Not authorized' })
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

  @ApiResponse({ status: 200, description: 'Attendance has stopped' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get('stopattendance/:id')
  async stopAttendance(@Param('id') id: string) {

    const attendance = await this.attendanceService.stopAttendance(id);

    return {
      msg: "Attendance and resume",
      client: attendance.client.name,
      professional: attendance.professional.name,
      duration: `${attendance.totalDuration} total minutes`,
      commission: `${attendance.totalComission} dollars in comission`,
      isActive: attendance.isActive,
      tasks: attendance.tasks
    };
  }

}
