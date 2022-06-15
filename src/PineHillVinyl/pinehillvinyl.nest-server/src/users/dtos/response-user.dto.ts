import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray, IsObject } from 'class-validator';
import { Address } from './user-address.dto';

export class ResponseUserDto {
    @IsString()
    id : string;
    @IsString()
    username: string;
    @IsEmail()
    email: string;
    @IsObject()
    addresses : Address[]
}