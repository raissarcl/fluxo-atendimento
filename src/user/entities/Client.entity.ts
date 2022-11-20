import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";
import { UsersTypeRoles } from "../enums/UserTypeRoles.enum";
import { Attendance } from "src/attendance/entities/Attendance.entity";
import { Exclude } from "class-transformer";

@Entity()
export class Client {

  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column({
    type: 'enum',
    enum: UsersTypeRoles
  })
  @Exclude()
  role: UsersTypeRoles;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @OneToMany(() => Attendance, (Attendance) => Attendance.client)
  attendances: Attendance[];

  @CreateDateColumn()
  @Exclude()
  created_at: Date;

  @UpdateDateColumn()
  @Exclude()
  updated_at: Date;

  constructor(partial: Partial<Client>) {
    Object.assign(this, partial);
  }
}