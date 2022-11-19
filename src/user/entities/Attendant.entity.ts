import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attendant {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}