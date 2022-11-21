// import { AppError } from "src/errors/AppError.error";
// import { Client } from "src/user/entities";
// import { UsersRoleTypes } from "src/user/enums/UserTypeRoles.enum";
// import { hashPassword } from "src/utils/bcrypt";
// import { Repository } from "typeorm";
// import { v4 as uuidv4 } from 'uuid';

// export class ClientRepositoryInMemory {

//   clients: Client[] = [];

//   async createClient(name: string, email: string, password: string): Promise<Client> {

//     const accountExists = this.getClientByEmail(email);

//     if (accountExists) throw new AppError('Account already exists');

//     const hashedPassword = await hashPassword(password);

//     const client = new Client();

//     Object.assign(client, {
//       id: uuidv4(),
//       name,
//       email,
//       password: hashedPassword,
//       role: UsersRoleTypes.USER,
//       attendances: [],
//       tasks: [],
//       created_at: new Date(),
//       updated_at: new Date(),
//     });

//     this.clients.push(client);

//     return client;
//   }

//   async getClientByEmail(email: string): Promise<Client | null> {
//     return this.clients.find(client => client.email === email);
//   }

//   async getClientByName(name: string): Promise<Client | null> {
//     return this.clients.find(client => client.name === name);
//   }


// }