import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppError } from 'src/errors/AppError.error';
import { hashPassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { Attendant, Client, Professional } from './entities';
import { UsersRoleTypes } from './enums/UsersRoleTypes.enum';
import { IUserService } from './interfaces/IUserService.interface';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Attendant)
    private readonly attendantRepository: Repository<Attendant>,
    @InjectRepository(Professional)
    private readonly professionalRepository: Repository<Professional>,
  ) { }

  async createClient(name: string, email: string, password: string): Promise<Client> {

    const accountExists = await this.getClientByEmail(email);

    if (accountExists) throw new AppError('Account already exists');

    const hashedPassword = await hashPassword(password);

    const client = this.clientRepository.create({
      role: UsersRoleTypes.USER,
      name,
      email,
      password: hashedPassword,
    });

    await this.clientRepository.save(client);

    return client;
  }

  async createProfessional(name: string, email: string, password: string, percentage: number): Promise<Professional> {

    const accountExists = await this.getProfessionalByEmail(email);

    if (accountExists) throw new AppError('Account already exists');

    const hashedPassword = await hashPassword(password);

    const professional = this.professionalRepository.create({
      role: UsersRoleTypes.USER,
      name,
      email,
      percentage,
      password: hashedPassword,
    });

    await this.professionalRepository.save(professional);

    return professional;
  }


  async getClientByEmail(email: string): Promise<Client | null> {
    return await this.clientRepository.findOneBy({ email });
  }

  async getAttendantByEmail(email: string): Promise<Attendant | null> {
    return await this.attendantRepository.findOneBy({ email });
  }

  async getProfessionalByEmail(email: string): Promise<Professional | null> {
    return await this.professionalRepository.findOneBy({ email });
  }

  async getClientByName(name: string): Promise<Client | null> {
    return await this.clientRepository.findOneBy({ name });
  }

  async getProfessionalByName(name: string): Promise<Professional | null> {
    return await this.professionalRepository.findOneBy({ name });
  }

}
