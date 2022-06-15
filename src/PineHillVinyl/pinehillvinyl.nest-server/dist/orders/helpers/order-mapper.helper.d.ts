import { CartItem } from "../../carts/dtos";
import { ResponseUserDto } from "../../users/dtos";
import { Cart } from "../../carts/schemas/cart.schema";
import { OrderProduct } from "../dtos/product-order.dto";
import { ResponseOrderDto } from "../dtos/response-order.dto";
import { Order, OrderDocument } from "../schemas/order.schema";
export declare class OrderMapper {
    ToSchema(user: ResponseUserDto, cart: Cart): Order;
    cartItemToOrder(items: CartItem[]): OrderProduct[];
    schemaToResponse(order: OrderDocument): ResponseOrderDto;
}
