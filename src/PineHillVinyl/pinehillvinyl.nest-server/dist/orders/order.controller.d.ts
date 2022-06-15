import { Cart } from '../carts/schemas/cart.schema';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly _service;
    constructor(_service: OrderService);
    createOrder(body: {
        cart: Cart;
    }, req: any): Promise<import("./dtos/response-order.dto").ResponseOrderDto>;
}
