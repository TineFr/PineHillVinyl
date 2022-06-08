import { Product, ProductDocument } from "../schemas/product.schema";
import { CreateProductDto, ResponseProductDto, UpdateProductDto } from "../dtos";
export declare class ProductMapper {
    createDtoToSchema(dto: CreateProductDto): Product;
    updateDtoToSchema(dto: UpdateProductDto): Product;
    schemaToResponse(product: ProductDocument): ResponseProductDto;
    schemaListToResponse(users: ProductDocument[]): ResponseProductDto[];
}
