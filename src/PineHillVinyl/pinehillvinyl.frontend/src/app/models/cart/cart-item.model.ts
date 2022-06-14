import { ProductCartModel } from "../products";
import { ProductModel } from "../products/product.interface";

export interface CartItem {
    product: ProductCartModel;
    quantity: number;

}



