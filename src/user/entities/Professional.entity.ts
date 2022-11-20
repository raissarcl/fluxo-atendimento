import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersTypeRoles } from "../enums/UserTypeRoles.enum";
import { Task } from "src/task/entities/Task.entity";
import { Attendance } from "src/attendance/entities/Attendance.entity";

@Entity()
export class Professional {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  password: string;

  @Column('boolean', { default: false })
  isBusy: boolean;

  @OneToMany((type) => Task, (task) => task.professional)
  tasks: Task[];

  @OneToMany((type) => Attendance, (attendance) => attendance.professional)
  attendance: Attendance[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}