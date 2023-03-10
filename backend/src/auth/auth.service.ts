import { BadRequestException, Injectable } from '@nestjs/common';
import { AppError } from 'src/common/errors';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from './dto/auth-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { TokenService } from 'src/token/token.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  async registerUser(dto: CreateUserDto): Promise<User> {
    const existsUser = await this.userService.findUserByEmail(dto.email);
    if (existsUser) {
      throw new BadRequestException(AppError.USER_EXISTS);
    }
    return this.userService.create(dto);
  }

  async loginUser(dto: UserLoginDto): Promise<LoginUserDto> {
    const existsUser = await this.userService.findUserByEmail(dto.email);
    if (!existsUser) throw new BadRequestException(AppError.USER_NOT_EXISTS);
    const validatePassword = await bcrypt.compare(
      dto.password,
      existsUser.password,
    );
    if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);
    const token = await this.tokenService.generateJwtToken(dto.email);
    const publicUser = await this.userService.publicUser(dto.email);
    return { ...publicUser, token };
  }
}
