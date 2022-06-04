import { CreateUserDto } from '../users/dtos';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dtos';
export declare class AuthController {
    private readonly _service;
    constructor(_service: AuthService);
    login(loginDto: LoginRequestDto): Promise<import("./dtos").LoginResponseDto>;
    register(dto: CreateUserDto): Promise<import("../users/dtos").ResponseUserDto>;
}
