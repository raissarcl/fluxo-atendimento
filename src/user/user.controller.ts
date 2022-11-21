import { Body, ClassSerializerInterceptor, Controller, forwardRef, Get, Inject, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBasicAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
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

@ApiBasicAuth()
@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(
    @Inject('USER_SERVICE')
    private readonly userService: IUserService,
    @Inject(forwardRef(() => 'AUTH_SERVICE'))
    private readonly authService: AuthService
  ) { }

  @ApiResponse({ status: 201, description: 'Client created' })
  @Post()
  async createClient(@Body() { name, email, password }: CreateClientDto) {
    const client = await this.userService.createClient(name, email, password);

    return {
      message: "Client created",
      name: client.name,
      email: client.email,
    };
  }

  @ApiResponse({ status: 201, description: 'Create professional' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post('/professional')
  async createProfessional(@Body() { name, email, password, percentage }: CreateProfessionalDto) {
    const professional = await this.userService.createProfessional(name, email, password, percentage);

    return {
      message: 'Professional created',
      name: professional.name,
      email: professional.email,
      TaskPercentage: professional.percentage,
    };
  }

  @ApiResponse({ status: 200, description: 'Login successful' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {

    return this.authService.login(req.user);
  }

  @ApiResponse({ status: 200, description: 'Profile returned' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get('/client/profile')
  async getClientProfile(@Req() req) {
    const { email } = req.user;

    const client = await this.userService.getClientByEmail(email);

    return {
      message: "Your profile",
      name: client.id,
      email: client.email,
      attendances: client.attendances,
      tasks: client.tasks
    };
  }

  @ApiResponse({ status: 200, description: 'Profile returned' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @UseGuards(JwtAuthGuard)
  @Get('/professional/profile')
  async getProfessionalProfile(@Req() req) {
    const { email } = req.user;

    const professional = await this.userService.getProfessionalByEmail(email);

    return {
      message: "Your profile",
      name: professional.id,
      email: professional.email,
      tasks: professional.tasks,
      taskPercentage: professional.percentage,
      attendances: professional.attendances,
    };
  }
}
