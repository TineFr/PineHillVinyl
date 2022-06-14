
import { ProductDocument } from "src/products/schemas/product.schema";
import { CartItem, CreateCartDto, ResponseCartDto, UpdateCartDto } from "../dtos";
import { CartProduct } from "../dtos/cart-product.dto";
import { Cart, CartDocument } from "../schemas/cart.schema";



export class CartMapper {
  
     createDtoToSchema(dto : CreateCartDto):  Cart {
      const newCart = new Cart();
      newCart.userId = dto.userId;
      return newCart;

    }

    updateDtoToSchema(dto : UpdateCartDto):  Cart {
      const newProduct = new Cart();
      newProduct.items = dto.items;
      return newProduct;

    }

    schemaToResponse(cart : CartDocument):  ResponseCartDto {
      const responseCart = new ResponseCartDto();
      responseCart.userId = cart.userId;
      responseCart.items = cart.items;
      return responseCart;

    }

    schemaToCartProduct(item : ProductDocument):  CartProduct {
      const cartProduct = new CartProduct();
      cartProduct.artist = item.artist;
      cartProduct.price = item.price;
      cartProduct.image = item.image;
      cartProduct.title = item.title;
      cartProduct.id = item.id;

      return cartProduct;

    }

  }