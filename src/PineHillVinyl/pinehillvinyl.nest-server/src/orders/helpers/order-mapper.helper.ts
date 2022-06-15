
import { CartItem } from "../../carts/dtos";
import { ResponseUserDto } from "../../users/dtos";
import { Cart } from "../../carts/schemas/cart.schema";
import { OrderProduct } from "../dtos/product-order.dto";
import { ResponseOrderDto } from "../dtos/response-order.dto";
import { Order, OrderDocument } from "../schemas/order.schema";





export class OrderMapper {
  
     ToSchema(user : ResponseUserDto, cart : Cart):  Order {
      const newOrder = new Order();
      newOrder.userId = user.id;
      newOrder.amount = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price , 0
      );
      // newOrder.shippingAddress = user.addresses?[0] : user.addresses[0] | null;
      newOrder.items = this.cartItemToOrder(cart.items);
      return newOrder;

    }

    cartItemToOrder(items : CartItem[]):  OrderProduct[] {

      let orderProducts = [];
      items.forEach(item => {
        const newOrderProduct = new OrderProduct();
        newOrderProduct.title = item.product.title;
        newOrderProduct.artist = item.product.artist;
        newOrderProduct.image = item.product.image;
        newOrderProduct.quantity = item.quantity;
        newOrderProduct.price = item.product.price;
        orderProducts.push(newOrderProduct)
        
      });

      return orderProducts;
    }



    // updateDtoToSchema(dto : UpdateGenreDto):  Genre {
    //   const updatedGenre = new Genre();
    //   updatedGenre.name = dto.name;
    //   return updatedGenre;

    // }

    schemaToResponse(order : OrderDocument):  ResponseOrderDto {
      const response = new ResponseOrderDto();
      response.id = order._id
      response.items = order.items;
      response.shippingAddress = order.shippingAddress;
      response.amount = order.amount;
      response.userId = order.userId;
      return response;

    }

    // schemaListToResponse(genres : GenreDocument[]):  ResponseGenreDto[] {

    //   let mappedGenres = [];
    //   genres.forEach(genre => {
    //     const response = new ResponseGenreDto();
    //     response.id = genre._id
    //     response.name = genre.name;
    //     mappedGenres.push(response);
    //   });
    //   return mappedGenres;

    // }
  }