import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { Client, Professional } from "src/user/entities";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Task {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty()
  @Column()
  type: string;

  @ApiProperty()
  @Column()
  value: number;

  @ApiProperty()
  @Column()
  amountMinutes: number;

  @ApiProperty()
  @Column()
  percentageProfessional: number;

  @ApiProperty()
  @Column()
  valueProfessional: number;

  @ApiProperty()
  @ManyToOne(() => Client, (client) => client.tasks)
  user: Client;

  @ApiProperty()
  @ManyToOne(() => Professional, (professional) => professional.tasks)
  professional: Professional;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;

}