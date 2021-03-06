import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from '../products/product.module';
import { ProductRepository } from 'src/products/product.repository';
import { CartsController } from './cart.controller';
import { CartRepository } from './cart.repository';
import { CartService } from './cart.service';
import { CartMapper } from './helpers/cart-mapper.helper';
import { Cart, CartSchema } from './schemas/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema
}]), ProductModule],
 controllers: [CartsController],
 providers: [CartService, CartRepository, CartMapper],
 exports: [CartService]

})
export class CartModule {}
