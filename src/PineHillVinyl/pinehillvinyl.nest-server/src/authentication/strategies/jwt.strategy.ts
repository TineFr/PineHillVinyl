import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

// import * as dotenv from "dotenv";
// dotenv.config({ path: `${__dirname}/../../../.env` });


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT,
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, username: payload.username, email: payload.email };
  }
}