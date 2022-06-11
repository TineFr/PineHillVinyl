import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';




export class ProductOrder{

    title: string;
    artist: string;
    image: string;
    quantity: number;
    price: number;

}
