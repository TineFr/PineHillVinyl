import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema
}])],
 controllers: [ProductsController],
 providers: [ProductService, ProductRepository]

})
export class ProductModule {}
