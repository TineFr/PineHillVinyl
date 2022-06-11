import { Model } from "mongoose";
import { PaginationParameters } from "src/shared-models/pagination.model";
import { FilterProductDto } from "./dtos/product-filter.dto";
import { Product, ProductDocument } from "./schemas/product.schema";
export declare class ProductRepository {
    private _model;
    constructor(_model: Model<ProductDocument>);
    getAllPaginated(pagination: PaginationParameters, filter: FilterProductDto): Promise<ProductDocument[]>;
    getById(id: any): Promise<ProductDocument>;
    add(prd: Product): Promise<ProductDocument>;
    update(id: any, prd: Product): Promise<ProductDocument>;
    delete(id: any): Promise<ProductDocument>;
}
