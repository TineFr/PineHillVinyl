import { IsString, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';

export class ResponseProductDto {
    @IsString()
    id: string
    @IsString()
    title: string;
    @IsString()
    artist: string;
    @IsString()
    image: string;
    @IsArray()
    trackList: string[];
    @IsString()
    description: string;
    @IsArray()
    genres: string[];
    @IsNumber()
    price: number;
    @IsDate()
    releaseDate : Date
}