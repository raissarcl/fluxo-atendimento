import { Controller, Inject } from '@nestjs/common';
import { IUserClientService } from '../interfaces';

@Controller('user/client')
export class UserClientController {

  constructor(
    @Inject('USER_CLIENT_SERVICE')
    private readonly userCLientService: IUserClientService
  ) { }

}
