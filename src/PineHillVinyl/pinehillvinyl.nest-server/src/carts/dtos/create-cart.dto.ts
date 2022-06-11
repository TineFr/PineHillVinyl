
import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';

export class CreateCartDto{
    @IsNotEmpty()
    @IsString()
    userId: string;
    
}