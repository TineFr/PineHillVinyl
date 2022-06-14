import { Genre } from './schemas/genre.schema';
import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from './dtos';
import { GenreService } from './genre.service';
export declare class GenresController {
    private readonly _service;
    constructor(_service: GenreService);
    findAll(): Promise<ResponseGenreDto[]>;
    addProduct(dto: CreateGenreDto): Promise<Genre>;
    updateProduct(id: any, dto: UpdateGenreDto): Promise<Genre>;
    deleteProduct(id: any): Promise<string>;
}
