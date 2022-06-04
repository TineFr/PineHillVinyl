import { CreateUserDto, ResponseUserDto, UpdateUserDto } from './dtos';
import { UserMapper } from './helpers/user-mapper.helper';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly _repository;
    private readonly _mapper;
    constructor(_repository: UserRepository, _mapper: UserMapper);
    getAll(): Promise<ResponseUserDto[]>;
    getById(id: any): Promise<ResponseUserDto>;
    getByEmail(email: string): Promise<ResponseUserDto>;
    add(dto: CreateUserDto): Promise<ResponseUserDto>;
    update(id: any, dto: UpdateUserDto): Promise<ResponseUserDto>;
}
