import { IsString, IsNotEmpty, IsEmail, IsDate, IsArray } from 'class-validator';
import { ProductCart } from '../../products/dtos/product-cart.dto';

export class UpdateCartDto {
    @IsArray()
    products: ProductCart[];
}