import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Task } from "src/task/entities/Task.entity";
import { Client, Professional } from "src/user/entities";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Attendance {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @ManyToOne((type) => Client, (client) => client.attendances)
  client: Client;

  @ApiProperty()
  @ManyToOne((type) => Professional, (professional) => professional.attendances)
  professional: Professional;

  @ApiProperty()
  @OneToMany((type) => Task, (task) => task.id)
  tasks: Task[];


  @ApiProperty()
  @Column('boolean', { default: 'false' })
  isActive: boolean;

  @ApiProperty()
  @Column()
  totalDuration: number;

  @ApiProperty()
  @Column()
  totalComission: number;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;

}
