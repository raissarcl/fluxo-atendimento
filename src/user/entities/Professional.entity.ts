import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersTypeRoles } from "../enums/UserTypeRoles.enum";
import { Task } from "src/task/entities/Task.entity";

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

  @Column()
  email: string;

  @Column()
  password: string;

  tasks: Task[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}