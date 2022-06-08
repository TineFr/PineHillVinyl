import { IsString, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';

export class ResponseGenreDto {
    @IsString()
    id: string
    @IsString()
    name: string;
}