import { Attendant, Client, Professional } from "../entities";

export interface IUserService {
  createClient(name: string, email: string, password: string): Promise<Client>;
  createProfessional(name: string, email: string, password: string, percentage: number): Promise<Professional>;
  getClientByEmail(email: string): Promise<Client | null>;
  getProfessionalByName(name: string): Promise<Professional | null>;
  getClientByName(name: string): Promise<Client | null>;
  getProfessionalByEmail(email: string): Promise<Professional | null>;
  getAttendantByEmail(email: string): Promise<Attendant | null>;
}