import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersRoleTypes } from "../enums/UsersRoleTypes.enum";
import { Task } from "src/task/entities/Task.entity";
import { Attendance } from "src/attendance/entities/Attendance.entity";
import { Exclude } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class Professional {

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
  percentage: number;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @OneToMany((type) => Task, (task) => task.professional)
  tasks: Task[];

  @ApiProperty()
  @OneToMany((type) => Attendance, (attendance) => attendance.professional)
  attendances: Attendance[];

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;
}