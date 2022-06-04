import { CreateUserDto, ResponseUserDto, UpdateUserDto } from "../dtos";
import { User, UserDocument } from "../schemas/user.schema";
export declare class UserMapper {
    createDtoToSchema(dto: CreateUserDto): User;
    updateDtoToSchema(dto: UpdateUserDto): User;
    schemaToResponse(user: UserDocument): ResponseUserDto;
    schemaListToResponse(users: UserDocument[]): ResponseUserDto[];
}
