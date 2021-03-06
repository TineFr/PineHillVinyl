import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { CartItem } from '../dtos';
import { CartProduct } from '../dtos/cart-product.dto';




export type CartDocument = Cart & Document;

@Schema()
export class Cart{
    @Prop({ required: true })
    userId: string;
    @Prop()
    items: CartItem[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);