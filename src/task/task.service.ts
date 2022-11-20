import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppError } from 'src/errors/AppError.error';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Task } from './entities/Task.entity';
import { ITaskService } from './interfaces/ITaskService.interface';

@Injectable()
export class TaskService implements ITaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
    private readonly userService: UserService,
  ) { }

  async createTasks(clientName: string, professionalName: string, taskArray: any[]): Promise<Task[]> {
    const clientUser = await this.userService.getClientByName(clientName);
    const professionalUser = await this.userService.getProfessionalByName(professionalName);

    if (!clientUser || !professionalUser) throw new AppError("One or more accounts don't exist");

    const percentageProfessional = professionalUser.percentage;

    const tasks = taskArray.map((task) => {
      const valueProfessional = task.value * (percentageProfessional / 100);

      const taskReady = this.taskRepository.create({
        type: task.taskType,
        value: task.value,
        amountMinutes: task.amountMinutes,
        user: clientUser,
        professional: professionalUser,
        percentageProfessional,
        valueProfessional,
      });

      this.taskRepository.save(taskReady);

      return taskReady;
    });

    return tasks;
  }

  async getAllTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }


}
