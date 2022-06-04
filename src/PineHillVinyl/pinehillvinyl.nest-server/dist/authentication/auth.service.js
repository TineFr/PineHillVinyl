"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const Crypto = require("crypto-js");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_repository_1 = require("../users/user.repository");
const user_service_1 = require("../users/user.service");
let AuthService = class AuthService {
    constructor(_userRepository, _userService, _jwtService) {
        this._userRepository = _userRepository;
        this._userService = _userService;
        this._jwtService = _jwtService;
    }
    async hashPassword(password) {
        let key = process.env.PASSWORD;
        let hashedPassword = Crypto.AES.encrypt(password, key).toString();
        return hashedPassword;
    }
    async verifyUser(email, password) {
        const user = await this._userRepository.getByEmail(email);
        if (user) {
            const hashedPass = Crypto.AES.decrypt(user.password, process.env.PASSWORD);
            if (password === hashedPass) {
                return {
                    id: user.id,
                    username: user.username,
                    email: user.email
                };
            }
            return null;
        }
        else
            throw new common_1.HttpException('This email does not exist', common_1.HttpStatus.BAD_REQUEST);
    }
    async login(login) {
        const user = await this.verifyUser(login.email, login.password);
        if (user) {
            const payload = { username: user.username, sub: user.id };
            return {
                jwt: this._jwtService.sign(payload),
            };
        }
        else
            throw new common_1.HttpException('Wrong login credentials', common_1.HttpStatus.UNAUTHORIZED);
    }
    async register(dto) {
        const user = await this._userService.getByEmail(dto.email);
        if (user)
            throw new common_1.HttpException('This e-mail is already in use', common_1.HttpStatus.BAD_REQUEST);
        dto.password = await this.hashPassword(dto.password);
        let newUser = await this._userService.add(dto);
        return newUser;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map