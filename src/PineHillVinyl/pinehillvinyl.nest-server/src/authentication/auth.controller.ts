import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from '../users/dtos';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dtos';



@Controller('auth')
export class AuthController {
  constructor(private readonly _service: AuthService) {}
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto : LoginRequestDto) {
    return this._service.login(loginDto);
  }

  @Post('/register')
  async register(@Body() dto : CreateUserDto) {
    return this._service.register(dto);
  }

}
