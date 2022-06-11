import { CreateCartDto, ResponseCartDto, UpdateCartDto } from "../dtos";
import { Cart, CartDocument } from "../schemas/cart.schema";



export class CartMapper {
  
     createDtoToSchema(dto : CreateCartDto):  Cart {
      const newCart = new Cart();
      newCart.userId = dto.userId;
      return newCart;

    }
    updateDtoToSchema(dto : UpdateCartDto):  Cart {
      const newProduct = new Cart();
      newProduct.products = dto.products;
      return newProduct;

    }

    schemaToResponse(cart : CartDocument):  ResponseCartDto {
      const responseCart = new ResponseCartDto();
      responseCart.userId = cart.userId
      responseCart.products = cart.products;
      return responseCart;

    }

  }