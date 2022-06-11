
import { ProductModel } from "../../models";
import { BaseState } from "./base-state.interface";

export interface ProductState extends BaseState{
    products?: ProductModel[] | null;
    singleProduct? : ProductModel | null;
}