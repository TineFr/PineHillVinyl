import { Genre } from './schemas/genre.schema';
import { CreateGenreDto, UpdateGenreDto } from './dtos';
import { GenreService } from './genre.service';
export declare class GenresController {
    private readonly _service;
    constructor(_service: GenreService);
    addProduct(dto: CreateGenreDto): Promise<Genre>;
    updateProduct(id: any, dto: UpdateGenreDto): Promise<Genre>;
    deleteProduct(id: any): Promise<string>;
}
