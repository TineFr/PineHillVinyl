import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
export type ProductDocument = Product & Document;


@Schema()
export class Product{
    @Prop({ required: true })
    title: string;
    @Prop({ required: true })
    artist: string;
    @Prop({ required: true })
    image: string;
    @Prop()
    trackList: string[];
    @Prop()
    description: string;
    @Prop()
    releaseDate: Date;
    @Prop()
    genres: string[];
    @Prop({ required: true })
    price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);