import { Controller, Inject } from '@nestjs/common';
import { ITaskService } from './interfaces/ITaskService.interface';

@Controller('task')
export class TaskController {

  constructor(
    @Inject('TASK_SERVICE')
    private readonly taskService: ITaskService
  ) { }


}
