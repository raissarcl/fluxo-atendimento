import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Attendant } from "../entities";

@Injectable()
export class UserAttendantService {

  constructor(
    @InjectRepository(Attendant)
    private readonly userAttendantRepository: Repository<Attendant>
  ) { }
}
