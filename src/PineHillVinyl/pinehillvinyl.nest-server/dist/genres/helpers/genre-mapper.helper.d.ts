import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from "../dtos";
import { Genre, GenreDocument } from "../schemas/genre.schema";
export declare class GenreMapper {
    createDtoToSchema(dto: CreateGenreDto): Genre;
    updateDtoToSchema(dto: UpdateGenreDto): Genre;
    schemaToResponse(genre: GenreDocument): ResponseGenreDto;
    schemaListToResponse(genres: GenreDocument[]): ResponseGenreDto[];
}
