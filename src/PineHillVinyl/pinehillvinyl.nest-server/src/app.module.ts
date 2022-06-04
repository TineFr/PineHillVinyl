import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './products/product.module';
import { UserModule } from './users/user.module';
import * as dotenv from "dotenv";
import { AuthModule } from './authentication/auth.module';
dotenv.config({ path: `${__dirname}/../.env` });


@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL),
  ProductModule,
  UserModule,
  AuthModule],
})
export class AppModule {}
