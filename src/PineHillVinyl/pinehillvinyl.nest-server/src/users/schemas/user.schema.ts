import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { Address, AddressSchema } from './user-address.schema';

export type UserDocument = User & Document;

@Schema()
export class User{
    @Prop({ required: true })
    username: string;
    @Prop({ required: true, unique: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ type: [AddressSchema] })
    addresses: Address[];

}

export const UserSchema = SchemaFactory.createForClass(User);