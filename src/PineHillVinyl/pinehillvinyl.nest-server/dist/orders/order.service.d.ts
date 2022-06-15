import { StripeService } from '../stripe/stripe.service';
import { UserService } from '../users/user.service';
import { OrderMapper } from './helpers/order-mapper.helper';
import { OrderRepository } from './order.repository';
import { CartService } from '../carts/cart.service';
export declare class OrderService {
    private _stripeService;
    private _userService;
    private _mapper;
    private _repository;
    private _cartService;
    constructor(_stripeService: StripeService, _userService: UserService, _mapper: OrderMapper, _repository: OrderRepository, _cartService: CartService);
    add(user: any, cart: any): Promise<any>;
}
