import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private readonly _service;
    constructor(_service: ProductService);
    findAll(): Promise<Product[]>;
}
