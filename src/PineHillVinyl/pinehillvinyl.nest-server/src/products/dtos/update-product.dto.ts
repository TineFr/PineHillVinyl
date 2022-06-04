import { IsArray, IsDate, IsNumber, IsString } from "class-validator";

export class UpdateProductDto {
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