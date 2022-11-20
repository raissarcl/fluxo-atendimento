import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class TaskTypes {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column('money')
  value: number;

  @Column()
  amountMinutes: number;

  @Column()
  percentageProfessional: number;

  @Column()
  valueProfessional: number;

}