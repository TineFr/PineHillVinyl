
import { Product } from "../schemas/product.schema";
// import { plainToInstance, instanceToPlain } from 'class-transformer';
import { ProductRepository } from "../product.repository";
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto";


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
      const newProduct = new Product();
      newProduct.artist = dto.artist;
      newProduct.title = dto.title;
      newProduct.image = dto.image;
      newProduct.trackList = dto.trackList;
      return newProduct;

    }
  }