import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
export type ProductDocument = Product & Document;


@Schema()
export class Product{
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    artist: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);