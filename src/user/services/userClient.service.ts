import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from '../entities';

@Injectable()
export class UserClientService {

  constructor(
    @InjectRepository(Client)
    private readonly userClientRepository: Repository<Client>
  ) { }
}
