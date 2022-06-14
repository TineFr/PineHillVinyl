import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';
import * as dotenv from "dotenv";
import { AuthModule } from './authentication/auth.module';
import { GenreModule } from './genres/genre.module';
import { CartModule } from './carts/cart.module';
import { PaginationModule } from './pagination/product.module';
import { StripeModule } from './stripe/stripe.module';
import { OrderModule } from './orders/order.module';
dotenv.config({ path: `${__dirname}/../.env` });


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL),
  ProductModule,
  UserModule,
  GenreModule,
  AuthModule,
  CartModule,
  PaginationModule,
  StripeModule,
  OrderModule],
  providers: []
})
export class AppModule {}
