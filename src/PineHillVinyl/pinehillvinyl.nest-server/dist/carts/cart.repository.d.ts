import { Model } from "mongoose";
import { Cart, CartDocument } from "./schemas/cart.schema";
export declare class CartRepository {
    private _model;
    constructor(_model: Model<CartDocument>);
    getById(id: any): Promise<CartDocument>;
    getByUserId(id: any): Promise<CartDocument[]>;
    add(prd: Cart): Promise<CartDocument>;
    update(id: any, prd: Cart): Promise<CartDocument>;
}
