import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';

export class ResponseUserDto {
    @IsString()
    id : string;
    @IsString()
    username: string;
    @IsEmail()
    email: string;
}