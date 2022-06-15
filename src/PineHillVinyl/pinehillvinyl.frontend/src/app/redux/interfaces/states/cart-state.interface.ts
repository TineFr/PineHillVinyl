
import { CartModel, ProductCartModel } from "src/app/models";
import { BaseState } from "./base-state.interface";

export interface CartState extends BaseState{
    cart : CartModel | null;
    amountOfProducts? : number;
    totalPrice? : any;
}