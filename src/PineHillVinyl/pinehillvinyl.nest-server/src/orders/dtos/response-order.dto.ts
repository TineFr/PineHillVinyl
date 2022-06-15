


import { Prop } from '@nestjs/mongoose';
import { IsString, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';
import { Address, AddressSchema } from '../../users/dtos/user-address.dto';
import { OrderProduct } from './product-order.dto';


export class ResponseOrderDto {
    @Prop({ required: true })
    id: string;
    @Prop({ required: true })
    userId: string;
    @Prop()
    amount: number;
    @Prop({type : OrderProduct})
    items: OrderProduct[];
    @Prop({type : AddressSchema})
    shippingAddress: Address;
}