import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { RolesGuard, Roles, Role } from 'src/auth/roles';
import { ITaskService } from './interfaces/ITaskService.interface';

@Controller('tasks')
export class TaskController {

  constructor(
    @Inject('TASK_SERVICE')
    private readonly taskService: ITaskService
  ) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

}



