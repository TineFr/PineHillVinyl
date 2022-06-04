import { Model } from "mongoose";
import { UserDocument, User } from "./schemas/user.schema";
export declare class UserRepository {
    private _model;
    constructor(_model: Model<UserDocument>);
    getAll(): Promise<UserDocument[]>;
    getById(id: any): Promise<UserDocument>;
    getByEmail(email: string): Promise<UserDocument>;
    add(prd: User): Promise<UserDocument>;
    update(id: any, prd: User): Promise<UserDocument>;
}
