import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { ProductMapper } from './helpers/product-mapper.helper';
import { ProductRepository } from './product.repository';
export declare class ProductService {
    private readonly _repository;
    private readonly _mapper;
    constructor(_repository: ProductRepository, _mapper: ProductMapper);
    get(search?: string): Promise<ResponseProductDto[]>;
    getById(id: any): Promise<ResponseProductDto>;
    add(dto: CreateProductDto): Promise<ResponseProductDto>;
    update(id: any, dto: UpdateProductDto): Promise<ResponseProductDto>;
    delete(id: any): Promise<string>;
}
