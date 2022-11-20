import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateClientDto } from '../dtos/createClient.dto';
import { Client } from '../entities';
import { UserService } from '../user.service';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(Client)
        }
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  it('should be able to create a new client', async () => {

    const user: CreateClientDto = {
      name: 'teste',
      email: 'teste@email.com',
      password: '123456'
    }



  })
});
