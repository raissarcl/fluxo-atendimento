import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { ApiBasicAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { RolesGuard, Roles, Role } from 'src/auth/roles';
import { ITaskService } from './interfaces/ITaskService.interface';

@ApiBasicAuth()
@ApiTags('Tasks')
@Controller('tasks')
export class TaskController {

  constructor(
    @Inject('TASK_SERVICE')
    private readonly taskService: ITaskService
  ) { }

  @ApiResponse({ status: 200, description: 'Get all tasks' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

}



