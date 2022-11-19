import { Client, Professional } from "src/user/entities";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Attendance {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => Client, (client) => client.attendances)
  client: Client;

  @ManyToOne((type) => Professional, (professional) => professional.attendance)
  professional: Professional;

  @Column('boolean', { default: 'true' })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
