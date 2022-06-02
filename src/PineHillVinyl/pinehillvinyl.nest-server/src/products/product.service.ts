import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema';


@Injectable()
export class ProductService {
  constructor(private readonly _repository :  ProductRepository) {}

  async getAll(): Promise<Product[]> {
      let result = await this._repository.getAll();
      // let test = ProductMapper.listToDto(result);
     return result;
  }

}


