import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartModule } from '../carts/cart.module';
import { UserMapper } from './helpers/user-mapper.helper';
import { User, UserSchema } from './schemas/user.schema';
import { UsersController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';



@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema
}]), CartModule],
 controllers: [UsersController],
 providers: [UserService, UserRepository, UserMapper],
 exports : [UserService, UserRepository]

})
export class UserModule {}
