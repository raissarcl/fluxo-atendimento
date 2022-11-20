import { hashSync } from "bcrypt";
import { DataSource } from "typeorm";
import { v4 as uuidv4 } from 'uuid';

enum UsersTypeRoles {
  USER = "user",
  ADMIN = "admin",
}

async function createAdmin() {

  const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "rootuser",
    password: "admin",
    database: "testem",
  });

  await AppDataSource.initialize();

  await AppDataSource.query(
    `INSERT INTO ATTENDANT(id, role, name, email, password, created_at, updated_at)
    values ('${uuidv4()}', '${UsersTypeRoles.ADMIN}', 'admin', 'admin@admin.com', '${hashSync('admin', 8)}', 'now()', 'now()')
    `
  );

  await AppDataSource.destroy();

  console.log('Admin created.');
}

createAdmin();

