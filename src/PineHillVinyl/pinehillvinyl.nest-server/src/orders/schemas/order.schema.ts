import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
import { ProductOrder, ProductOrderSchema } from 'src/products/schemas/product-order.schema';
import { Product, ProductSchema } from 'src/products/schemas/product.schema';
import { Address, AddressSchema } from 'src/users/schemas/user-address.schema';
export type OrderDocument = Order & Document;


@Schema()
export class Order{
    @Prop({ required: true })
    userId: string;
    @Prop({ required: true })
    paymentStatus: string;
    @Prop({ required: true })
    status: string;
    @Prop({type : ProductOrderSchema})
    items: ProductOrder[];
    @Prop({type : AddressSchema})
    shippingAddress: Address;
    



}

export const OrderSchema = SchemaFactory.createForClass(Order);