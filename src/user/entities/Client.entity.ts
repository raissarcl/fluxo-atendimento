import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersRoleTypes } from "../enums/UsersRoleTypes.enum";
import { Attendance } from "src/attendance/entities/Attendance.entity";
import { Exclude } from "class-transformer";
import { Task } from "src/task/entities/Task.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Client {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: UsersRoleTypes
  })
  role: UsersRoleTypes;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @OneToMany((type) => Attendance, (Attendance) => Attendance.client)
  attendances: Attendance[];

  @ApiProperty()
  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[];

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;


}