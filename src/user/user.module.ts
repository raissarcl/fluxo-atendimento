import { Module } from '@nestjs/common';
import { UserAttendanceController, UserClientController } from './controllers';
import { UserAttendantService, UserClientService } from './services';

@Module({
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
