import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import * as dotenv from "dotenv";
import { AuthController } from "./auth.controller";
import { UserModule } from "..//users/user.module";
dotenv.config({ path: `${__dirname}/../../.env` });

@Module({
   imports: [UserModule,  PassportModule,
      JwtModule.registerAsync( { useFactory : () => ({
         secret: process.env.JWT,
         signOptions: { expiresIn: '3600s' },
      })
      }),],
   controllers: [AuthController],
   providers: [AuthService]
  
  })
  export class AuthModule {}