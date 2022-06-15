import { Model } from "mongoose";
import { CartItem } from "./dtos";
import { Cart, CartDocument } from "./schemas/cart.schema";
export declare class CartRepository {
    private _model;
    constructor(_model: Model<CartDocument>);
    getById(id: any): Promise<CartDocument>;
    getByUserId(id: any): Promise<CartDocument[]>;
    addProduct(id: any, prd: CartItem): Promise<CartDocument>;
    removeProduct(id: any, prd: CartItem): Promise<CartDocument>;
    update(id: any, prd: Cart): Promise<CartDocument>;
    resetItems(id: any): Promise<CartDocument>;
    add(prd: Cart): Promise<CartDocument>;
    delete(id: any): Promise<CartDocument>;
}
