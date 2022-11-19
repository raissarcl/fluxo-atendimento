import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAttendanceController, UserClientController } from './controllers';
import { Attendant, Client } from './entities';
import { UserAttendantService, UserClientService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Attendant,
      Client,
    ])
  ],
  controllers: [UserClientController, UserAttendanceController],
  providers: [
    {
      provide: 'USER_CLIENT_SERVICE',
      useClass: UserClientService,
    },
    {
      provide: 'USER_ATTENDANT_SERVICE',
      useClass: UserAttendantService
    }
  ]
})
export class UserModule { }
