import { Body, Controller, Request, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';


@UseGuards(AuthGuard('local'))
@Controller('auth')
export class AuthController {
  constructor(private readonly _service: AuthService) {}
  @Post('/login')
  async login(@Body() loginDto) {
    return this._service.login(loginDto);
  }

}
