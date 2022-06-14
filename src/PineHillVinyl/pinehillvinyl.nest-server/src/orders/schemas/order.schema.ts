import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
import { ProductOrder} from 'src/orders/dtos/product-order.dto';
import { Product, ProductSchema } from 'src/products/schemas/product.schema';
import { Address, AddressSchema } from 'src/users/dtos/user-address.dto';
export type OrderDocument = Order & Document;


@Schema()
export class Order{
    @Prop({ required: true })
    userId: string;
    @Prop()
    paymentStatus: string;
    @Prop()
    status: string;
    @Prop()
    amount: number;
    @Prop({type : ProductOrder})
    items: ProductOrder[];
    @Prop({type : AddressSchema})
    shippingAddress: Address;
}

export const OrderSchema = SchemaFactory.createForClass(Order);