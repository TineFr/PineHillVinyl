import { IsArray, IsString} from 'class-validator';
import { ProductCart } from '../../products/dtos/product-cart.dto';


export class ResponseCartDto {
    @IsString()
    id : string;
    @IsString()
    userId: string;
    @IsArray()
    products: ProductCart[];
}