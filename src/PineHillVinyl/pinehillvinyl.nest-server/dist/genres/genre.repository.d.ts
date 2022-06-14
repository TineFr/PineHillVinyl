import { Model } from "mongoose";
import { PaginationParameters } from "src/pagination/pagination-parameters.model";
import { Genre, GenreDocument } from "./schemas/genre.schema";
export declare class GenreRepository {
    private _model;
    constructor(_model: Model<GenreDocument>);
    add(genre: Genre): Promise<Genre>;
    update(id: any, genre: Genre): Promise<Genre>;
    delete(id: any): Promise<Genre>;
    getAll(): Promise<GenreDocument[]>;
    getAllPaginated(pagination: PaginationParameters): Promise<GenreDocument[]>;
    getById(id: any): Promise<GenreDocument>;
}
