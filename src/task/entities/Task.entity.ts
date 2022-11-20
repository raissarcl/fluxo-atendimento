import { Client, Professional } from "src/user/entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TaskTypes } from "./TaskTypes.entity";

@Entity()
export class Task {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => TaskTypes)
  @JoinColumn()
  taskType: TaskTypes;

  @ManyToOne(() => Client, (client) => client.id)
  user: Client;

  @ManyToOne(() => Professional, (professional) => professional.tasks)
  professional: Professional;

  @Column('boolean', { default: false })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

}