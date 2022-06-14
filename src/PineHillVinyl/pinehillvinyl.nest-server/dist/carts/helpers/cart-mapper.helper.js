"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartMapper = void 0;
const dtos_1 = require("../dtos");
const cart_schema_1 = require("../schemas/cart.schema");
class CartMapper {
    createDtoToSchema(dto) {
        const newCart = new cart_schema_1.Cart();
        newCart.userId = dto.userId;
        return newCart;
    }
    updateDtoToSchema(dto) {
        const newProduct = new cart_schema_1.Cart();
        newProduct.products = dto.products;
        return newProduct;
    }
    schemaToResponse(cart) {
        const responseCart = new dtos_1.ResponseCartDto();
        responseCart.userId = cart.userId;
        responseCart.products = cart.products;
        return responseCart;
    }
}
exports.CartMapper = CartMapper;
//# sourceMappingURL=cart-mapper.helper.js.map