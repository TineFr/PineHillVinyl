import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
import { CartProduct } from './cart-product.dto';


export class CartItem{
    product : CartProduct
    quantity: number;
}

