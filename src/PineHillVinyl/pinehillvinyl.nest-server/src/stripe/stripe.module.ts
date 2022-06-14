import { Module } from '@nestjs/common';
import * as dotenv from "dotenv";
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
dotenv.config({ path: `${__dirname}/../.env` });


@Module({
  controllers: [StripeController],
  providers: [StripeService]
})
export class StripeModule {}
