import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    username: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
}