import { Body, Controller, Request, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Cart } from '../stripe/cart.model';
import { JwtGuard } from '../authentication/guards/jwt.guard';
import { OrderService } from './order.service';


@Controller('orders')
export class OrderController {
  constructor(private readonly _service: OrderService) {}


        @UseGuards(JwtGuard)
        @Post('stripe')
        createOrder(@Body() body : {cart : Cart},
        @Request() req: any ){
            return this._service.add(req.user, body.cart);
        }


}
