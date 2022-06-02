import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";
export declare class ProductRepository {
    private _repository;
    constructor(_repository: Model<ProductDocument>);
    getAll(): Promise<Product[]>;
    getById(id: any): Promise<Product>;
    create(item: Product): Promise<Product>;
    update(id: string, item: Product): Promise<Product & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
}
