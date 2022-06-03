import { IsString, IsNotEmpty } from 'class-validator';

export class RequestProductDto{
    @IsNotEmpty()
    @IsString()
    title: string;
    @IsNotEmpty()
    @IsString()
    artist: string;
    @IsNotEmpty()
    @IsString()
    image: string;
    trackList: string[];
}

export class ResponseProductDto {
    id: string;
    title: string;
    artist: string;
}
