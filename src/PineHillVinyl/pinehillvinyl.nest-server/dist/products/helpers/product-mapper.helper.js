"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
const product_schema_1 = require("../schemas/product.schema");
const dtos_1 = require("../dtos");
class ProductMapper {
    createDtoToSchema(dto) {
        const newProduct = new product_schema_1.Product();
        newProduct.artist = dto.artist;
        newProduct.title = dto.title;
        newProduct.image = dto.image;
        newProduct.trackList = dto.trackList;
        newProduct.description = dto.description;
        newProduct.price = dto.price;
        newProduct.genres = dto.genres;
        newProduct.releaseDate = dto.releaseDate;
        return newProduct;
    }
    updateDtoToSchema(dto) {
        const updatedProduct = new product_schema_1.Product();
        updatedProduct.artist = dto.artist;
        updatedProduct.title = dto.title;
        updatedProduct.image = dto.image;
        updatedProduct.trackList = dto.trackList;
        updatedProduct.description = dto.description;
        updatedProduct.price = dto.price;
        updatedProduct.genres = dto.genres;
        updatedProduct.releaseDate = dto.releaseDate;
        return updatedProduct;
    }
    schemaToResponse(product) {
        const response = new dtos_1.ResponseProductDto();
        response.id = product._id;
        response.artist = product.artist;
        response.title = product.title;
        response.image = product.image;
        response.trackList = product.trackList;
        response.description = product.description;
        response.price = product.price;
        response.genres = product.genres;
        response.releaseDate = product.releaseDate;
        return response;
    }
    schemaListToResponse(users) {
        let mappedUsers = [];
        users.forEach(product => {
            const response = new dtos_1.ResponseProductDto();
            response.id = product._id;
            response.artist = product.artist;
            response.title = product.title;
            response.image = product.image;
            response.trackList = product.trackList;
            response.description = product.description;
            response.price = product.price;
            response.genres = product.genres;
            response.releaseDate = product.releaseDate;
            mappedUsers.push(response);
        });
        return mappedUsers;
    }
}
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=product-mapper.helper.js.map