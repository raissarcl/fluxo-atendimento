import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AttendanceModule } from './attendance/attendance.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadEntities: true,
      synchronize: true,
      /*
      IN PRODUCTION OPTION (OPÇÕES EM PRODUÇÃO)
      synchronize: false,
      migrations: [
        'dist/src/db/migrations/*.js
      ],
      cli: {
        migrationsDir: 'src/db/migrations
      }
      */
    }),
    AttendanceModule,
    UserModule,
    AuthModule,
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
