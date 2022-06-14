import { Cart } from './cart.model';
import { StripeService } from './stripe.service';
export declare class StripeController {
    private readonly _service;
    constructor(_service: StripeService);
    checkout(cart: Cart): void;
}
