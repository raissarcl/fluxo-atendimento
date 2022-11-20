import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { Task } from './entities/Task.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { Attendant, Client, Professional } from 'src/user/entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task, Client, Attendant, Professional]),
    AuthModule,
    JwtModule,
    UserModule
  ],
  providers: [{
    provide: 'TASK_SERVICE',
    useClass: TaskService,
  },
    UserService,
  ],
  controllers: [TaskController]
})
export class TaskModule { }
