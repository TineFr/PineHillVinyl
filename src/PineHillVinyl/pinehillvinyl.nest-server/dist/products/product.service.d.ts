import { CreateProductDto, UpdateProductDto } from './dtos';
import { ProductMapper } from './helpers/product-mapper.helper';
import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema';
export declare class ProductService {
    private readonly _repository;
    private readonly _mapper;
    constructor(_repository: ProductRepository, _mapper: ProductMapper);
    getAll(): Promise<Product[]>;
    getById(id: any): Promise<Product>;
    add(dto: CreateProductDto): Promise<Product>;
    update(id: any, dto: UpdateProductDto): Promise<Product>;
}
