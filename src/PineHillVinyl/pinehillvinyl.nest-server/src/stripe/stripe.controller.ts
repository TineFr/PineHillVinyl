import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Cart } from './cart.model';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly _service: StripeService) {}

        @Post()
        checkout(@Body() body : {cart : Cart}){
         return   this._service.checkout(body.cart);

        }


}
