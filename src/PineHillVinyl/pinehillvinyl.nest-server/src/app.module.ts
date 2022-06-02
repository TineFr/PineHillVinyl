import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://TineFranchois:OcdpolS9ReALm6mT@cluster0.2y0v4.mongodb.net/pinehillvinyl'),
  ProductModule],
})
export class AppModule {}
