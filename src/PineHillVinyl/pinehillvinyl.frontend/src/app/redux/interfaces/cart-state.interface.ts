
import { CartModel, ProductCartModel } from "../../models";
import { BaseState } from "./base-state.interface";

export interface CartState extends BaseState{
    cart : CartModel | null;
    products?: ProductCartModel[] | null;
    amountOfProducts? : number;
    totalPrice? : number;


}