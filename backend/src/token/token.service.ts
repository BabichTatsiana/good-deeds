import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
  constructor(private readonly jwtService: JwtService) {}

  async generateJwtToken(user) {
    const payload = { user: user };
    return (
      this,
      this.jwtService.sign(payload, {
        secret: 'jwt_key_babich',
        expiresIn: 860000,
      })
    );
  }
}
