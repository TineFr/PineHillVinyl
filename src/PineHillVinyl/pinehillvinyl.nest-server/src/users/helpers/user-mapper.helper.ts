import { CreateUserDto, ResponseUserDto, UpdateUserDto } from "../dtos";
import { User, UserDocument } from "../schemas/user.schema";



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

    schemaToResponse(user : UserDocument):  ResponseUserDto {
      const newProduct = new ResponseUserDto();
      newProduct.id = user._id
      newProduct.username = user.username;
      newProduct.email = user.email;
      return newProduct;

    }

    schemaListToResponse(users : UserDocument[]):  ResponseUserDto[] {

      let mappedUsers = [];
      users.forEach(x => {
        const user = new ResponseUserDto();
        user.id = x._id
        user.username = x.username;
        user.email = x.email;
        mappedUsers.push(user);
      });
      return mappedUsers;

    }
  }