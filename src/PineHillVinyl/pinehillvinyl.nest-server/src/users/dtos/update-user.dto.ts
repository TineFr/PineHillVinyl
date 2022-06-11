import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';
import { Address } from './user-address.dto';

export class UpdateUserDto {
    @IsString()
    username: string;
    @IsEmail()
    email: string;
    @IsString()
    password: string;
    @IsArray()
    address: Address[]
}