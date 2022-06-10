import { PaginationParameters } from 'src/shared-models/pagination.model';
import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { FilterProductDto } from './dtos/product-filter.dto';
import { ProductMapper } from './helpers/product-mapper.helper';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private readonly _repository;
    private readonly _mapper;
    constructor(_repository: ProductRepository, _mapper: ProductMapper);
    getAllPaginated(pagination: PaginationParameters, filter: FilterProductDto): Promise<ResponseProductDto[]>;
    getById(id: any): Promise<ResponseProductDto>;
    add(dto: CreateProductDto): Promise<ResponseProductDto>;
    update(id: any, dto: UpdateProductDto): Promise<ResponseProductDto>;
    delete(id: any): Promise<string>;
}
