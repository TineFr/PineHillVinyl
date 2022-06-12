import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "..//users/user.module";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { JwtGuard } from "./guards/jwt.guard";
import * as dotenv from "dotenv";
dotenv.config({ path: `${__dirname}/../../.env` });

@Module({
   imports: [UserModule, PassportModule,
      JwtModule.registerAsync( { useFactory : () => ({
         secret: process.env.JWT,
         signOptions: { expiresIn: '3600s' },
      })
      }),],
   controllers: [AuthController],
   providers: [AuthService, JwtGuard, JwtStrategy]
  
  })
  export class AuthModule {}