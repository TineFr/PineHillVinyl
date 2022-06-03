import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema';
export declare class ProductService {
    private readonly _repository;
    constructor(_repository: ProductRepository);
    getAll(): Promise<Product[]>;
    getById(id: number): Promise<Product>;
}
