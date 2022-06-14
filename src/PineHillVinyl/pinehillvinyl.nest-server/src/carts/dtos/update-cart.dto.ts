import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';
import { CartItem } from './cart-item.dto';


export class UpdateCartDto {
    @IsArray()
    items: CartItem[];
}