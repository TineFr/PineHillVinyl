import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../users/user.service";
const Crypto = require ("crypto-js")
// import * as dotenv from "dotenv";
import { CreateUserDto, ResponseUserDto } from "src/users/dtos";
// dotenv.config({ path: `${__dirname}/../../.env` });

@Injectable()
export class AuthService {
    constructor(private _userService : UserService,
                private _jwtService: JwtService) {}

    async hashPassword(password: string) : Promise<string>{
        let key = process.env.PASSWORD;
        let hashedPasword =  Crypto.AES.encrypt(password, key).toString();
        return hashedPasword;
    }            

    async verifyUser(email: string, password: string) : Promise<any>{
        const user = await this._userService.getByEmail(email);
        if (user){
            // const hashedPass = Crypto.AES.decrypt(user.password, process.env.PASSWORD);
            // if (password === hashedPass){
            //     const { password, ...result } = user;
            //     return result;
            // }
            return null;
   
        }
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
          access_token: this._jwtService.sign(payload),
        };
      }

      async register(dto : CreateUserDto) : Promise<ResponseUserDto> {
        const user = await this._userService.getByEmail(dto.email);
        if (user) throw new HttpException('This e-mail is already in use', HttpStatus.BAD_REQUEST);
        dto.password  = await this.hashPassword(dto.password);
        let newUser =  await this._userService.add(dto);
        return newUser;


      }
    

}