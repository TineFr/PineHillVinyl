import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LocalStrategy } from "./strategies/local.strategy";
import * as dotenv from "dotenv";
import { AuthController } from "./auth.controller";
import { UserModule } from "../users/user.module";
dotenv.config({ path: `${__dirname}/../../.env` });

@Module({
   imports: [UserModule,  PassportModule,
      JwtModule.register({
        secret: process.env.JWT,
        signOptions: { expiresIn: '1d' },
      }),],
   controllers: [AuthController],
   providers: [AuthService, LocalStrategy, JwtService]
  
  })
  export class AuthModule {}