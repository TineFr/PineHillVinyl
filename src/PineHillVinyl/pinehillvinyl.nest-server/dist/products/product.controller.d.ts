import { CreateProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
export declare class ProductsController {
    private readonly _service;
    constructor(_service: ProductService);
    findAll(page: number, limit: number, artist: string): Promise<Product[]>;
    findOne(id: any): Promise<Product>;
    addProduct(dto: CreateProductDto): Promise<Product>;
    updateProduct(id: any, dto: UpdateProductDto): Promise<Product>;
    deleteProduct(id: any): Promise<string>;
}
