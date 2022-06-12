import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductFilterMapper } from './helpers/product-filter.helper';
import { ProductMapper } from './helpers/product-mapper.helper';
import { ProductsController } from './product.controller';
import { ProductRepository } from './product.repository';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schemas/product.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema
}])],
 controllers: [ProductsController],
 providers: [ProductService, ProductRepository, ProductMapper, ProductFilterMapper]

})
export class ProductModule {}
