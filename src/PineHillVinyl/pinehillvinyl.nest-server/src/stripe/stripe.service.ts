import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import {Cart} from  './cart.model'




@Injectable()
export class StripeService {
private stripe;

constructor(){this.stripe = new Stripe("sk_test_51L8jRUGiOJlUonpfP6bLjMCqzqPddo0Ho34UHfmhAsdP7p1bRF1pIt5YwGwTfUiSJdFlhDp8Huk6UxzGUziFnLpA00dxJQUZMv", {apiVersion: '2020-08-27'})}

checkout(cart : any){
    const totalPrice = cart.products.reduce((acc, item) => acc + item.quantity * item.price , 0
    );

    return this.stripe.paymentIntents.create({
        amount: totalPrice * 100,
        currency: 'eur',
        payment_method_types: ['card']
    })
}




}


