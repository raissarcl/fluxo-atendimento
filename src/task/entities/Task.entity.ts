import { Exclude } from "class-transformer";
import { Client, Professional } from "src/user/entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {

  @Exclude()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  value: number;

  @Column()
  amountMinutes: number;

  @Exclude()
  @Column()
  percentageProfessional: number;

  @Exclude()
  @Column()
  valueProfessional: number;

  @ManyToOne(() => Client, (client) => client.tasks)
  user: Client;

  @ManyToOne(() => Professional, (professional) => professional.tasks)
  professional: Professional;

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  constructor(partial: Partial<Task>) {
    Object.assign(this, partial);
  }

}