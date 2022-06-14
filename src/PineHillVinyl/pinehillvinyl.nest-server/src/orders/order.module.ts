import { Module } from '@nestjs/common';
import * as dotenv from "dotenv";
import { StripeModule } from '../stripe/stripe.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
dotenv.config({ path: `${__dirname}/../.env` });


@Module({
  imports: [StripeModule],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule {}
