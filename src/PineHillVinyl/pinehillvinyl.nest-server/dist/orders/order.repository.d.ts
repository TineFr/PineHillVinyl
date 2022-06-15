import { Model } from "mongoose";
import { Order, OrderDocument } from "./schemas/order.schema";
export declare class OrderRepository {
    private _model;
    constructor(_model: Model<OrderDocument>);
    getAll(): Promise<OrderDocument[]>;
    getById(id: any): Promise<OrderDocument>;
    getByEmail(email: string): Promise<OrderDocument>;
    add(prd: Order): Promise<OrderDocument>;
    update(id: any, prd: Order): Promise<OrderDocument>;
    delete(id: any): Promise<OrderDocument>;
}
