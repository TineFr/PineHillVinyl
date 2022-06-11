import { ProductModel } from "../../models";
import { BaseState } from "./base-state.interface";

export interface CartState extends BaseState{
    products?: ProductModel[] | null;
    amountOfProducts? : number;
    totalPrice? : number;


}