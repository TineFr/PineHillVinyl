import { Body, Controller, Request, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Cart } from '../carts/schemas/cart.schema';
import { JwtGuard } from '../authentication/guards/jwt.guard';
import { OrderService } from './order.service';


@Controller('order')
export class OrderController {
  constructor(private readonly _service: OrderService) {}


        @UseGuards(JwtGuard)
        @Post('stripe')
        createOrder(@Body() body : {cart : Cart},
        @Request() req: any ){
            return this._service.add(req.user, body.cart);
        }


}
