import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendant, Client, Professional } from './entities';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Attendant,
      Client,
      Professional
    ]),
    forwardRef(() => AuthModule),
    JwtModule
  ],
  providers: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
  ],
  exports: [
    {
      provide: 'USER_SERVICE',
      useClass: UserService,
    },
  ],
  controllers: [UserController]
})
export class UserModule { }
