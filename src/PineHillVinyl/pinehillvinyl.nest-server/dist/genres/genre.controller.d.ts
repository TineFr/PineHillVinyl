import { Genre } from './schemas/genre.schema';
import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from './dtos';
import { GenreService } from './genre.service';
import { ProductService } from '../products/product.service';
import { ResponseProductDto } from '../products/dtos';
import { PaginationService } from 'src/pagination/pagination.service';
export declare class GenresController {
    private readonly _service;
    private readonly _productService;
    private readonly _paginationService;
    constructor(_service: GenreService, _productService: ProductService, _paginationService: PaginationService<ResponseProductDto>);
    findAll(): Promise<ResponseGenreDto[]>;
    addGenre(dto: CreateGenreDto): Promise<Genre>;
    getProducts(id: any, page: number, limit: number): Promise<any>;
    updateGenre(id: any, dto: UpdateGenreDto): Promise<Genre>;
    deleteGenre(id: any): Promise<string>;
}
