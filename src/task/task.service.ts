import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entities/Task.entity';
import { ITaskService } from './interfaces/ITaskService.interface';

@Injectable()
export class TaskService implements ITaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) { }

}
