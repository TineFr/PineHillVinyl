import { UserService } from './user.service';
import { CreateUserDto, ResponseUserDto, UpdateUserDto } from './dtos';
export declare class UsersController {
    private readonly _service;
    constructor(_service: UserService);
    findAll(): Promise<ResponseUserDto[]>;
    findOne(id: any): Promise<ResponseUserDto>;
    addProduct(dto: CreateUserDto): Promise<ResponseUserDto>;
    updateProduct(id: any, dto: UpdateUserDto): Promise<ResponseUserDto>;
    deleteProduct(id: any): Promise<string>;
}
