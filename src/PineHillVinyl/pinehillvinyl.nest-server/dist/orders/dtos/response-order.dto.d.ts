import { Address } from '../../users/dtos/user-address.dto';
import { OrderProduct } from './product-order.dto';
export declare class ResponseOrderDto {
    id: string;
    userId: string;
    amount: number;
    items: OrderProduct[];
    shippingAddress: Address;
}
