import { ResponseProductDto, RequestProductDto } from "../dtos/product.dto";
import { Product } from "../schemas/product.schema";
// import { plainToInstance, instanceToPlain } from 'class-transformer';
import { ProductRepository } from "../product.repository";


export class ProductMapper {

    // static singleToDto(Product :Product):  ResponseProductDto {
    //   const data = instanceToPlain(Product);
    //   return plainToInstance(ResponseProductDto, data);
    // }

    // static listToDto(Products : Product[]):  ResponseProductDto[] {
    //     let mappedList = []
    //     Products.forEach(x =>{
    //         mappedList.push(instanceToPlain(x));
    //     });  
    //    let result = []
    //    mappedList.forEach(x => {
    //         result.push(plainToInstance(ResponseProductDto, x)); 
    //     }); 
    //     return result;
    //   }

    // static singleToEntity(dto : RequestProductDto):  Product {
    //     const data = instanceToPlain(dto);
    //     return plainToInstance(Product, data);
    //   }

    // static listToEntity(dtos : RequestProductDto[]):  Product[] {
    //     let mappedList = []
    //     dtos.forEach(x =>{
    //         mappedList.push(instanceToPlain(x));
    //     });  
    //    let result = []
    //    mappedList.forEach(x => {
    //         result.push(plainToInstance(Product, x)); 
    //     }); 
    //     return result;
    //   }

  }