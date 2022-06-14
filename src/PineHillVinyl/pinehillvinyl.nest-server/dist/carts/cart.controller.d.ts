import { CartService } from './cart.service';
import { ResponseCartDto, UpdateCartDto } from './dtos';
export declare class CartsController {
    private readonly _service;
    constructor(_service: CartService);
    findByUserId(id: any): Promise<ResponseCartDto>;
    updateCart(id: any, dto: UpdateCartDto): Promise<ResponseCartDto>;
}
