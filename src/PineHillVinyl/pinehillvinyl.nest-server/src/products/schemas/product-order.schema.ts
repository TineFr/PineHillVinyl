import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
export type ProductDocument = ProductOrder & Document;


@Schema()
export class ProductOrder{
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    artist: string;
    @Prop({ required: true })
    image: string;
    @Prop()
    quantity: number;
    @Prop()
    price: number;

}

export const ProductOrderSchema = SchemaFactory.createForClass(ProductOrder);