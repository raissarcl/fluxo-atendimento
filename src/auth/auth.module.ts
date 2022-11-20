import { forwardRef, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attendant, Client, Professional } from 'src/user/entities';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwtAuth.guard';
import { LocalAuthGuard } from './guards/localAuth.guard';
import { RolesGuard } from './roles/roles.guard';
import { JwtStrategy } from './utils/jwt.strategy';
import { LocalStrategy } from './utils/local.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([Client, Professional, Attendant]),
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string>('JWT_EXPIRESIN')
          }
        }
      },
      inject: [ConfigService]
    }),
    PassportModule,
    forwardRef(() => UserModule)
  ],

  providers: [
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    },
    {
      provide: 'USER_SERVICE',
      useClass: UserService
    },
    JwtAuthGuard,
    RolesGuard,
    LocalAuthGuard,
    JwtStrategy,
    LocalStrategy,
    AuthService,
  ],
  exports: [AuthService, JwtAuthGuard, LocalAuthGuard, JwtModule, RolesGuard]
})
export class AuthModule {
  constructor(
    protected readonly configService: ConfigService
  ) { }
}
