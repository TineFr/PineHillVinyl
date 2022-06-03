import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';

export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    username: string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UpdateUserDto {
    @IsString()
    username: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
}
