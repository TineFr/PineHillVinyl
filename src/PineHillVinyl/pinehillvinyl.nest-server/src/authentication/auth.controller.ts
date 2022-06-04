import { Body, Controller, Request, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from '../users/dtos';
import { AuthService } from './auth.service';


// @UseGuards(AuthGuard('local'))
@Controller('auth')
export class AuthController {
  constructor(private readonly _service: AuthService) {}
  @Post('/login')
  async login(@Body() loginDto : CreateUserDto) {
    return this._service.login(loginDto);
  }

  @Post('/register')
  async register(@Body() dto : CreateUserDto) {
    return this._service.register(dto);
  }

}
