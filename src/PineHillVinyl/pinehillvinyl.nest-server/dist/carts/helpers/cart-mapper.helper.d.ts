import { ProductDocument } from "src/products/schemas/product.schema";
import { CreateCartDto, ResponseCartDto, UpdateCartDto } from "../dtos";
import { CartProduct } from "../dtos/cart-product.dto";
import { Cart, CartDocument } from "../schemas/cart.schema";
export declare class CartMapper {
    createDtoToSchema(dto: CreateCartDto): Cart;
    updateDtoToSchema(dto: UpdateCartDto): Cart;
    schemaToResponse(cart: CartDocument): ResponseCartDto;
    schemaToCartProduct(item: ProductDocument): CartProduct;
}
