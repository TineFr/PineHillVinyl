import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';

export class CreateProductDto{
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    artist: string;
    @IsNotEmpty()
    @IsString()
    image: string;
    @IsArray()
    trackList: string[];
    @IsString()
    description: string;
    @IsArray()
    genres: string[];
    @IsNotEmpty()
    @IsNumber()
    price: number;
    @Type(() => Date)
    @IsDate()
    releaseDate : Date;

}
