import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {

  constructor(
    @Inject(forwardRef(() => 'USER_SERVICE'))
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {

  }

  async validateUser(email: string, password: string): Promise<any> {

    const clientUser = await this.userService.getClientByEmail(email);

    const isValidUser = clientUser && await comparePasswords(password, clientUser.password);

    if (isValidUser) {
      return clientUser;
    }

    const attendantUser = await this.userService.getAttendantByEmail(email);

    const isValidAttendent = attendantUser && await comparePasswords(password, attendantUser.password);

    if (isValidAttendent) {
      return attendantUser;
    }

    const professionalUser = await this.userService.getProfessionalByEmail(email);

    const isValidProfessional = professionalUser && await comparePasswords(password, professionalUser.password);

    if (isValidProfessional) {
      return professionalUser;
    }

    return null;

  }

  async login(user: any) {
    const payload = { email: user.email, name: user.name, role: user.role, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
