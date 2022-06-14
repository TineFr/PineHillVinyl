


import { Prop } from '@nestjs/mongoose';
import { IsString, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';
import { Address, AddressSchema } from '../../users/dtos/user-address.dto';
import { ProductOrder } from './product-order.dto';

export class ResponseOrderDto {

    @Prop({ required: true })
    userId: string;
    @Prop()
    amount: number;
    @Prop({type : ProductOrder})
    items: [];
    @Prop({type : AddressSchema})
    shippingAddress: Address;
}