const Crypto = require ("crypto-js")

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto, ResponseUserDto } from "src/users/dtos";
import {LoginRequestDto, LoginResponseDto} from './dtos'
import { UserRepository } from "../users/user.repository";
import { UserService } from "../users/user.service";

@Injectable()
export class AuthService {
    constructor(private _userRepository: UserRepository,
                private _userService: UserService,
                private _jwtService: JwtService) {}

    async hashPassword(password: string) : Promise<string>{
        let key = process.env.PASSWORD;
        let hashedPassword =  Crypto.AES.encrypt(password, key).toString();
        return hashedPassword;
    }            

    async verifyUser(email: string, password: string) : Promise<ResponseUserDto>{
        const user = await this._userRepository.getByEmail(email);
        if (user){
            const key = process.env.PASSWORD;
            const hashedPass = Crypto.AES.decrypt(user.password, key)
                                         .toString(Crypto.enc.Utf8);
                                          
            if (password === hashedPass){
              return {
                id: user.id,
                username: user.username,
                email : user.email
              }
            }
            return null;
   
        } else throw new HttpException('This email does not exist', HttpStatus.BAD_REQUEST);
    }

    async login(login: LoginRequestDto) : Promise<LoginResponseDto> {
        const user = await this.verifyUser(login.email, login.password);
        if (user){
          const payload = { username: user.username, sub: user.id, email: user.email };
          const jwt =  await this._jwtService.signAsync(payload);
          return { 
              jwt : jwt
          };
        }
        else throw new HttpException('Wrong credentials', HttpStatus.UNAUTHORIZED);
      }

      async register(dto : CreateUserDto) : Promise<ResponseUserDto> {

        const user = await this._userService.getByEmail(dto.email);
        if (user) throw new HttpException('This e-mail is already in use', HttpStatus.BAD_REQUEST);
        dto.password  = await this.hashPassword(dto.password);
        let newUser =  await this._userService.add(dto);
        return newUser;
      }
    

}