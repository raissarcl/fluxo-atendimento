import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersTypeRoles } from "../enums/UserTypeRoles.enum";
import { Task } from "src/task/entities/Task.entity";
import { Attendance } from "src/attendance/entities/Attendance.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Professional {

  @Exclude()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Exclude()
  @Column({
    type: 'enum',
    enum: UsersTypeRoles
  })
  role: UsersTypeRoles;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  percentage: number;

  @Exclude()
  @Column()
  password: string;

  @OneToMany((type) => Task, (task) => task.professional)
  tasks: Task[];

  @OneToMany((type) => Attendance, (attendance) => attendance.professional)
  attendance: Attendance[];

  @Exclude()
  @CreateDateColumn()
  created_at: Date;


  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<Professional>) {
    Object.assign(this, partial);
  }
}