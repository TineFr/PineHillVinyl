"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const dtos_1 = require("../dtos");
const user_schema_1 = require("../schemas/user.schema");
class UserMapper {
    createDtoToSchema(dto) {
        const newProduct = new user_schema_1.User();
        newProduct.username = dto.username;
        newProduct.email = dto.email;
        newProduct.password = dto.password;
        return newProduct;
    }
    updateDtoToSchema(dto) {
        const newProduct = new user_schema_1.User();
        newProduct.username = dto.username;
        newProduct.email = dto.email;
        newProduct.password = dto.password;
        return newProduct;
    }
    schemaToResponse(user) {
        const newProduct = new dtos_1.ResponseUserDto();
        newProduct.id = user._id;
        newProduct.username = user.username;
        newProduct.email = user.email;
        return newProduct;
    }
    schemaListToResponse(users) {
        let mappedUsers = [];
        users.forEach(x => {
            const user = new dtos_1.ResponseUserDto();
            user.id = x._id;
            user.username = x.username;
            user.email = x.email;
            mappedUsers.push(user);
        });
        return mappedUsers;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user-mapper.helper.js.map