import { CreateUserDto, UpdateUserDto } from "../dtos/user.dto";
import { User } from "../schemas/user.schema";



export class UserMapper {
  
     createDtoToSchema(dto : CreateUserDto):  User {
      const newProduct = new User();
      newProduct.username = dto.username;
      newProduct.email = dto.email;
      newProduct.password = dto.password;
      return newProduct;

    }
    updateDtoToSchema(dto : UpdateUserDto):  User {
      const newProduct = new User();
      newProduct.username = dto.username;
      newProduct.email = dto.email;
      newProduct.password = dto.password;
      return newProduct;

    }
  }