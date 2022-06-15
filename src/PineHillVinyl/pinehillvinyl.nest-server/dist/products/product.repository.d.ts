import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";
export declare class ProductRepository {
    private _model;
    constructor(_model: Model<ProductDocument>);
    get(): Promise<ProductDocument[]>;
    getById(id: any): Promise<ProductDocument>;
    getByGenre(genreId: any): Promise<ProductDocument[]>;
    add(prd: Product): Promise<ProductDocument>;
    update(id: any, prd: Product): Promise<ProductDocument>;
    delete(id: any): Promise<ProductDocument>;
}
