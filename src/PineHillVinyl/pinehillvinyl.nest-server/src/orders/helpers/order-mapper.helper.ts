
import { ResponseUserDto } from "src/users/dtos";
import { Cart } from "../../carts/schemas/cart.schema";
import { User, UserDocument } from "../../users/schemas/user.schema";
import { Order } from "../schemas/order.schema";





export class OrderMapper {
  
    //  ToSchema(user : ResponseUserDto, cart : Cart):  Order {
    //   const newOrder = new Order();
    //   newOrder.userId = user.id;
    //   newOrder.amount = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price , 0
    //   );
    //   newOrder.shippingAddress = user.addresses.filter(function(x) { return x.isMainAddress; })[0];
    //   newOrder.items = cart.items;


  

    //   return newGenre;

    // }
    // updateDtoToSchema(dto : UpdateGenreDto):  Genre {
    //   const updatedGenre = new Genre();
    //   updatedGenre.name = dto.name;
    //   return updatedGenre;

    // }

    // schemaToResponse(genre : GenreDocument):  ResponseGenreDto {
    //   const response = new ResponseGenreDto();
    //   response.id = genre._id
    //   response.name = genre.name;
    //   return response;

    // }

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