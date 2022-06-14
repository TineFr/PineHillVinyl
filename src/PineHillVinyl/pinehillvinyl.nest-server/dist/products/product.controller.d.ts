import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './product.service';
import { PaginationService } from '../pagination/pagination.service';
import { PaginationMeta } from '../pagination/pagination-meta.model';
export declare class ProductsController {
    private readonly _service;
    private readonly _paginationService;
    constructor(_service: ProductService, _paginationService: PaginationService<ResponseProductDto>);
    get(page: number, limit: number, search: string): Promise<{
        data: ResponseProductDto[];
        pagination: PaginationMeta;
    }>;
    findOne(id: any): Promise<ResponseProductDto>;
    addProduct(dto: CreateProductDto): Promise<ResponseProductDto>;
    updateProduct(id: any, dto: UpdateProductDto): Promise<ResponseProductDto>;
    deleteProduct(id: any): Promise<string>;
}
