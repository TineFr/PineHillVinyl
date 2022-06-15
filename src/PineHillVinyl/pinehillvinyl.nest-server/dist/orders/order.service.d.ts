import { StripeService } from '../stripe/stripe.service';
import { UserService } from '../users/user.service';
import { Cart } from '../carts/schemas/cart.schema';
import { OrderMapper } from './helpers/order-mapper.helper';
import { OrderRepository } from './order.repository';
export declare class OrderService {
    private _stripeService;
    private _userService;
    private _mapper;
    private _repository;
    constructor(_stripeService: StripeService, _userService: UserService, _mapper: OrderMapper, _repository: OrderRepository);
    add(user: any, cart: Cart): Promise<import("./dtos/response-order.dto").ResponseOrderDto>;
}
