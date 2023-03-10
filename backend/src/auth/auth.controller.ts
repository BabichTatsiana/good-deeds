import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt-guars';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schemas/user.schema';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/auth-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto): Promise<User> {
    return this.authService.registerUser(dto);
  }

  @Post('login')
  login(@Body() dto: UserLoginDto) {
    return this.authService.loginUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('checkAuth')
  checkAuthorize() {
    return true;
  }
}
