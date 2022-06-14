import { Cart } from './cart.model';
export declare class StripeService {
    private stripe;
    constructor();
    checkout(cart: Cart): any;
}
