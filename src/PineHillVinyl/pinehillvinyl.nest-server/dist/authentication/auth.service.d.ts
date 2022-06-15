import { JwtService } from "@nestjs/jwt";
import { CreateUserDto, ResponseUserDto } from "src/users/dtos";
import { LoginRequestDto, LoginResponseDto } from './dtos';
import { UserRepository } from "../users/user.repository";
import { UserService } from "../users/user.service";
export declare class AuthService {
    private _userRepository;
    private _userService;
    private _jwtService;
    constructor(_userRepository: UserRepository, _userService: UserService, _jwtService: JwtService);
    hashPassword(password: string): Promise<string>;
    verifyUser(email: string, password: string): Promise<any>;
    login(login: LoginRequestDto): Promise<LoginResponseDto>;
    register(dto: CreateUserDto): Promise<ResponseUserDto>;
}
