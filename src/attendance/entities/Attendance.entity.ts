import { Exclude } from "class-transformer";
import { Task } from "src/task/entities/Task.entity";
import { Client, Professional } from "src/user/entities";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ExclusionMetadata } from "typeorm/metadata/ExclusionMetadata";

@Entity()
export class Attendance {

  @Exclude()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => Client, (client) => client.attendances)
  client: Client;

  @ManyToOne((type) => Professional, (professional) => professional.attendance)
  professional: Professional;

  @OneToMany((type) => Task, (task) => task.id)
  tasks: Task[];

  @Column('boolean', { default: 'false' })
  isActive: boolean;

  @Column()
  totalDuration: number;

  @Exclude()
  @Column()
  totalComission: number;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<Attendance>) {
    Object.assign(this, partial);
  }
}
