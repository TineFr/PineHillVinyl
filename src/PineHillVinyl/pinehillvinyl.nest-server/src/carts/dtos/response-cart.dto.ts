import { IsArray, IsString} from 'class-validator';
import { CartItem } from './cart-item.dto';


export class ResponseCartDto {
    @IsString()
    id : string;
    @IsString()
    userId: string;
    @IsArray()
    items: CartItem[];
}