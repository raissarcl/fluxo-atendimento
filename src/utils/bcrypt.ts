import { hash, genSalt, compare } from 'bcrypt';

export async function hashPassword(password: string) {
  const SALT = await genSalt();
  return hash(password, SALT);
}

export async function comparePasswords(password: string, hashedPassword: string) {
  return await compare(password, hashedPassword);
}