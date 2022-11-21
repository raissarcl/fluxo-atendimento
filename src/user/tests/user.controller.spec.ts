// import { Test, TestingModule } from '@nestjs/testing';
// import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from 'src/auth/auth.module';
// import { DataSource, Entity } from 'typeorm';
// import { Attendant, Client, Professional } from '../entities';
// import { UserController } from '../user.controller';
// import { UserService } from '../user.service';


// describe('UserController', () => {
//   let userController: UserController;
//   let userService: UserService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       imports: [AuthModule, TypeOrmModule, DataSource],
//       controllers: [UserController],
//       providers: [
//         {
//           provide: UserService,
//           useValue: {
//             createClient: jest.fn(),
//             createProfessional: jest.fn(),
//             getClientByEmail: jest.fn(),
//             getAttendantByEmail: jest.fn(),
//             getProfessionalByEmail: jest.fn(),
//             getClientByName: jest.fn(),
//             getProfessionalByName: jest.fn(),
//           },
//         },
//         {
//           provide: getRepositoryToken(Client),
//           useValue: {}
//         },
//         {
//           provide: getRepositoryToken(Professional),
//           useValue: {}
//         },
//         {
//           provide: getRepositoryToken(Attendant),
//           useValue: {}
//         },
//       ]
//     }).compile();

//     userController = module.get<UserController>(UserController);
//     userService = module.get<UserService>(UserService);
//   });

//   it('should be defined', () => {
//     expect(userController).toBeDefined();
//     expect(userService).toBeDefined();
//   });
// });
