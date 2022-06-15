import { Cart } from '../stripe/cart.model';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly _service;
    constructor(_service: OrderService);
    createOrder(body: {
        cart: Cart;
    }, req: any): Promise<any>;
}
