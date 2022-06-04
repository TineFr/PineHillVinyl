
import { Product, ProductDocument } from "../schemas/product.schema";
import { CreateProductDto, ResponseProductDto, UpdateProductDto } from "../dtos";


export class ProductMapper {
  
     createDtoToSchema(dto : CreateProductDto):  Product {
      const newProduct = new Product();
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
    updateDtoToSchema(dto : UpdateProductDto):  Product {
      const updatedProduct = new Product();
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

    schemaToResponse(product : ProductDocument):  ResponseProductDto {
      const response = new ResponseProductDto();
      response.id = product._id
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
  }