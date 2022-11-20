import { Body, ClassSerializerInterceptor, Controller, forwardRef, Get, Inject, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/guards/jwtAuth.guard';
import { LocalAuthGuard } from 'src/auth/guards/localAuth.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/roles.enum';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { CreateClientDto } from './dtos/createClient.dto';
import { CreateProfessionalDto } from './dtos/createProfessional.dto';
import { Client, Professional } from './entities';
import { IUserService } from './interfaces/IUserService.interface';

@Controller('user')
export class UserController {

  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: IUserService,
    @Inject(forwardRef(() => 'AUTH_SERVICE'))
    private readonly authService: AuthService
  ) { }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async createClient(@Body() { name, email, password }: CreateClientDto) {
    const client = await this.userService.createClient(name, email, password);

    const partialClient = new Client(client);

    return partialClient;
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @UseInterceptors(ClassSerializerInterceptor)
  @Post('/professional')
  async createProfessional(@Body() { name, email, password, percentage }: CreateProfessionalDto) {
    const professional = await this.userService.createProfessional(name, email, password, percentage);

    const partialProfessional = new Professional(professional);

    return partialProfessional;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {

    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/profile')
  async getProfile(@Req() req) {
    const { email } = req.user;

    const user = await this.userService.getClientByEmail(email);

    const partialUser = new Client(user);

    return partialUser;
  }
}
