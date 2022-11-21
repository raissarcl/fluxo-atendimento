// import { AppError } from "src/errors/AppError.error";
// import { Professional } from "src/user/entities";
// import { UsersRoleTypes } from "src/user/enums/UserTypeRoles.enum";
// import { hashPassword } from "src/utils/bcrypt";
// import { Repository } from "typeorm";
// import { v4 as uuidv4 } from 'uuid';

// export class ProfessionalRepositoryInMemory {

//   professionals: Professional[] = [];

//   async createProfessional(name: string, email: string, password: string, percentage: number): Promise<Professional> {

//     const accountExists = await this.getProfessionalByEmail(email);

//     if (accountExists) throw new AppError('Account already exists');

//     const hashedPassword = await hashPassword(password);

//     const professional = new Professional();

//     Object.assign(professional, {
//       id: uuidv4(),
//       name,
//       email,
//       password: hashedPassword,
//       percentage,
//       attendances: [],
//       tasks: [],
//       role: UsersRoleTypes.USER,
//       created_at: new Date(),
//       updated_at: new Date(),

//     });

//     this.professionals.push(professional);

//     return professional;
//   }

//   async getProfessionalByEmail(email: string): Promise<Professional | null> {
//     return this.professionals.find(professional => professional.email === email);
//   }


//   async getProfessionalByName(name: string): Promise<Professional | null> {
//     return this.professionals.find(professional => Professional.name === name);
//   }

// }