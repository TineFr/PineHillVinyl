import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import {Cart} from  './cart.model'



@Injectable()
export class StripeService {
private stripe;
constructor(){this.stripe = new Stripe(process.env.STRIPE, 
{apiVersion: '2020-08-27'})}

checkout(cart : any){
    const totalPrice = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price , 0
    );

    return this.stripe.paymentIntents.create({
        amount: Math.round(totalPrice * 100),
        currency: 'eur',
        payment_method_types: ['card']
    })
}




}


