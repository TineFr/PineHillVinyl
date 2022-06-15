import { Module } from '@nestjs/common';
import * as dotenv from "dotenv";
import { StripeService } from './stripe.service';
dotenv.config({ path: `${__dirname}/../.env` });


@Module({
  providers: [StripeService],
  exports : [StripeService]
})
export class StripeModule {}
