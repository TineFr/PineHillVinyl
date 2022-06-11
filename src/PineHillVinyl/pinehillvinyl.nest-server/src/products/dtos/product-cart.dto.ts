import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';


export interface ProductCart{
    id : string
    title: string;
    artist: string;
    image: string;
    quantity: number;
    price: number;

}

