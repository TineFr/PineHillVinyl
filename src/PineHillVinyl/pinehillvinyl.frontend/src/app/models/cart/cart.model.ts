import { ProductModel } from "../products/product.interface";

export interface CartModel {
    id: string;
    userId: string;
    products: ProductModel[];
    quantity: number;
    totalPrice: number;
}



