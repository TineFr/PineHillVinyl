import { Injectable } from '@nestjs/common';

import Stripe from 'stripe';
import { ResponseOrderDto } from './dtos/response-order.dto';
import { StripeService } from 'src/stripe/stripe.service';
import { UserService } from 'src/users/user.service';
import { Cart } from 'src/carts/schemas/cart.schema';

@Injectable()
export class OrderService {


constructor(private _stripeService : StripeService,
           private _userService : UserService ){}

async add(user : any, cart : Cart) {
    try{
        this._stripeService.checkout(cart);
        let client = this._userService.getById(user.sub);






    } catch(error : any){

    }


}


}







