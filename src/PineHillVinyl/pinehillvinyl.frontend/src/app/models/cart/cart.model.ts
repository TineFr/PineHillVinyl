import { ProductCartModel } from "../products";
import { ProductModel } from "../products/product.interface";
import { CartItem } from "./cart-item.model";

export interface CartModel {
    id: string;
    // userId: string;
    items: CartItem[];
    quantity: number;
}



