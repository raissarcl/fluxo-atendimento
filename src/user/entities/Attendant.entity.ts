import { ApiProperty } from "@nestjs/swagger";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UsersRoleTypes } from "../enums/UsersRoleTypes.enum";

@Entity()
export class Attendant {

  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string;


  @ApiProperty()
  @Column({
    type: 'enum',
    enum: UsersRoleTypes
  })
  role: UsersRoleTypes;


  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column()
  password: string;

  @ApiProperty()
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated_at: Date;
}