import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/users/user.service";
const Crypto = require ("crypto-js")

@Injectable()
export class AuthService {
    constructor(private _userService : UserService,
                private _jwtService: JwtService) {}

    async verifyUser(email: string, password: string) : Promise<any>{
        const user = await this._userService.getByEmail(email);
        if (user){
            const hashedPass = Crypto.AES.decrypt(user.password, process.env.PASSWORD);
            if (password === hashedPass){
                const { password, ...result } = user;
                return result;
            }
            return null;
   
        }
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id };
        return {
          access_token: this._jwtService.sign(payload),
        };
      }
    

}