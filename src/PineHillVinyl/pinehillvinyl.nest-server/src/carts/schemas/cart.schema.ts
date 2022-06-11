import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import { ProductCart } from '../../products/dtos/product-cart.dto';



export type CartDocument = Cart & Document;

@Schema()
export class Cart{
    @Prop({ required: true })
    userId: string;
    @Prop()
    products: ProductCart[];
}

export const CartSchema = SchemaFactory.createForClass(Cart);