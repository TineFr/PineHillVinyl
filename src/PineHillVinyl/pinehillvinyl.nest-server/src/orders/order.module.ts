import { Module } from '@nestjs/common';
import * as dotenv from "dotenv";
import { UserModule } from '../users/user.module';
import { StripeModule } from '../stripe/stripe.module';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { OrderMapper } from './helpers/order-mapper.helper';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { CartModule } from '../carts/cart.module';
dotenv.config({ path: `${__dirname}/../.env` });


@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema
  }]), StripeModule, UserModule, CartModule],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository, OrderMapper]
})
export class OrderModule {}
