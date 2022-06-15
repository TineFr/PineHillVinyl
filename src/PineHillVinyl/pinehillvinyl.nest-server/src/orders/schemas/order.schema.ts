import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
import { OrderProduct} from '../../orders/dtos/product-order.dto';
import { Address, AddressSchema } from '../../users/dtos/user-address.dto';
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
    @Prop({type : OrderProduct})
    items: OrderProduct[];
    @Prop({type : AddressSchema})
    shippingAddress?: Address;
}

export const OrderSchema = SchemaFactory.createForClass(Order);