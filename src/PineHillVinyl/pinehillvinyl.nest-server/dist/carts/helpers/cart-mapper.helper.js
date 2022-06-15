"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartMapper = void 0;
const dtos_1 = require("../dtos");
const cart_product_dto_1 = require("../dtos/cart-product.dto");
const cart_schema_1 = require("../schemas/cart.schema");
class CartMapper {
    createDtoToSchema(dto) {
        const newCart = new cart_schema_1.Cart();
        newCart.userId = dto.userId;
        return newCart;
    }
    updateDtoToSchema(dto) {
        const newProduct = new cart_schema_1.Cart();
        newProduct.items = dto.items;
        return newProduct;
    }
    schemaToResponse(cart) {
        const responseCart = new dtos_1.ResponseCartDto();
        responseCart.userId = cart.userId;
        responseCart.items = cart.items;
        responseCart.id = cart.id;
        return responseCart;
    }
    schemaToCartProduct(item) {
        const cartProduct = new cart_product_dto_1.CartProduct();
        cartProduct.artist = item.artist;
        cartProduct.price = item.price;
        cartProduct.image = item.image;
        cartProduct.title = item.title;
        cartProduct.id = item.id;
        return cartProduct;
    }
}
exports.CartMapper = CartMapper;
//# sourceMappingURL=cart-mapper.helper.js.map