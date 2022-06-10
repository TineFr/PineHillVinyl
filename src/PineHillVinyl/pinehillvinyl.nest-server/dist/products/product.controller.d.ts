import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './product.service';
export declare class ProductsController {
    private readonly _service;
    constructor(_service: ProductService);
    findAll(page: number, limit: number, artist: string): Promise<ResponseProductDto[]>;
    findOne(id: any): Promise<ResponseProductDto>;
    addProduct(dto: CreateProductDto): Promise<ResponseProductDto>;
    updateProduct(id: any, dto: UpdateProductDto): Promise<ResponseProductDto>;
    deleteProduct(id: any): Promise<string>;
}
