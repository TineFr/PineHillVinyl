import { ProductCartModel } from "../products";
import { ProductModel } from "../products/product.interface";

export interface CartModel {
    id: string;
    userId: string;
    products: ProductCartModel[];
    quantity: number;
    totalPrice: number;
}



