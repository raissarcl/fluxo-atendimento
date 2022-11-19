import { Controller, Inject } from "@nestjs/common";
import { IUserAttendantService } from "../interfaces/IUserAttendantService.interface";

@Controller('user/attendant')
export class UserAttendanceController {

  constructor(
    @Inject('USER_ATTENDANT_SERVICE')
    private readonly userAttendanceService: IUserAttendantService
  ) { }

}
