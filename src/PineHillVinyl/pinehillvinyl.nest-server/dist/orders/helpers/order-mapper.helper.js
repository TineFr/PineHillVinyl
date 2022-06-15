"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderMapper = void 0;
const product_order_dto_1 = require("../dtos/product-order.dto");
const response_order_dto_1 = require("../dtos/response-order.dto");
const order_schema_1 = require("../schemas/order.schema");
class OrderMapper {
    ToSchema(user, cart) {
        const newOrder = new order_schema_1.Order();
        newOrder.userId = user.id;
        newOrder.amount = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
        newOrder.shippingAddress = user.addresses.filter(function (x) { return x.isMainAddress; })[0];
        newOrder.items = this.cartItemToOrder(cart.items);
        return newOrder;
    }
    cartItemToOrder(items) {
        let orderProducts = [];
        items.forEach(item => {
            const newOrderProduct = new product_order_dto_1.OrderProduct();
            newOrderProduct.title = item.product.title;
            newOrderProduct.artist = item.product.artist;
            newOrderProduct.image = item.product.image;
            newOrderProduct.quantity = item.quantity;
            newOrderProduct.price = item.product.price;
            orderProducts.push(newOrderProduct);
        });
        return orderProducts;
    }
    schemaToResponse(order) {
        const response = new response_order_dto_1.ResponseOrderDto();
        response.id = order._id;
        response.items = order.items;
        response.shippingAddress = order.shippingAddress;
        response.amount = order.amount;
        response.userId = order.userId;
        return response;
    }
}
exports.OrderMapper = OrderMapper;
//# sourceMappingURL=order-mapper.helper.js.map