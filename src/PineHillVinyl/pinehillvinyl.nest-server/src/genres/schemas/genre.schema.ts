import { Prop,  Schema,  SchemaFactory } from '@nestjs/mongoose';
import {Document, SchemaType} from 'mongoose';
export type GenreDocument = Genre & Document;


@Schema()
export class Genre{
    @Prop({ required: true })
    name: string;
}

export const GenreSchema = SchemaFactory.createForClass(Genre);