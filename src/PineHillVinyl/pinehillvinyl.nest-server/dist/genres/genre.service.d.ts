import { PaginationParameters } from 'src/shared-models/pagination.model';
import { CreateGenreDto, UpdateGenreDto } from './dtos';
import { GenreRepository } from './genre.repository';
import { GenreMapper } from './helpers/genre-mapper.helper';
import { Genre } from './schemas/genre.schema';
export declare class GenreService {
    private readonly _repository;
    private readonly _mapper;
    constructor(_repository: GenreRepository, _mapper: GenreMapper);
    getAllPaginated(pagination: PaginationParameters): Promise<Genre[]>;
    getById(id: any): Promise<Genre>;
    add(dto: CreateGenreDto): Promise<Genre>;
    update(id: any, dto: UpdateGenreDto): Promise<Genre>;
    delete(id: any): Promise<string>;
}
