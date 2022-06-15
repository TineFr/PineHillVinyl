import { CartService } from './cart.service';
import { CartItem, ResponseCartDto } from './dtos';
export declare class CartsController {
    private readonly _service;
    constructor(_service: CartService);
    findByUserId(id: any): Promise<ResponseCartDto>;
    addProduct(id: any, body: {
        dto: CartItem;
    }): Promise<ResponseCartDto>;
    addMultiple(id: any, body: {
        dto: CartItem[];
    }): Promise<ResponseCartDto>;
    removeProduct(id: any, dto: {
        dto: CartItem;
    }): Promise<ResponseCartDto>;
    update(id: any, dto: any): Promise<ResponseCartDto>;
    deleteProduct(id: any): Promise<string>;
}
