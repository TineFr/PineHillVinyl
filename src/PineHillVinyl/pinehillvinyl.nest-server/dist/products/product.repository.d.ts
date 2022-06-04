import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";
export declare class ProductRepository {
    private _model;
    constructor(_model: Model<ProductDocument>);
    getAll(): Promise<ProductDocument[]>;
    getById(id: any): Promise<ProductDocument>;
    add(prd: Product): Promise<Product>;
    update(id: any, prd: Product): Promise<Product>;
    delete(id: any): Promise<Product>;
}
