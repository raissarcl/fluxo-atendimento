import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersRoleTypes } from "../enums/UsersRoleTypes.enum";
import { Attendance } from "src/attendance/entities/Attendance.entity";
import { Exclude } from "class-transformer";
import { Task } from "src/task/entities/Task.entity";

@Entity()
export class Client {

  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column({
    type: 'enum',
    enum: UsersRoleTypes
  })
  @Exclude()
  role: UsersRoleTypes;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany((type) => Attendance, (Attendance) => Attendance.client)
  attendances: Attendance[];

  @OneToMany((type) => Task, (task) => task.user)
  tasks: Task[];

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<Client>) {
    Object.assign(this, partial);
  }
}