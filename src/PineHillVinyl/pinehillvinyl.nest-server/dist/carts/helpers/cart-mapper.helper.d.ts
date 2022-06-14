import { CreateCartDto, ResponseCartDto, UpdateCartDto } from "../dtos";
import { Cart, CartDocument } from "../schemas/cart.schema";
export declare class CartMapper {
    createDtoToSchema(dto: CreateCartDto): Cart;
    updateDtoToSchema(dto: UpdateCartDto): Cart;
    schemaToResponse(cart: CartDocument): ResponseCartDto;
}
