import { Injectable } from '@nestjs/common';
import { RequestProductDto } from './dtos/product.dto';
import { ProductMapper } from './helpers';
import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema';


@Injectable()
export class ProductService {
  constructor(private readonly _repository :  ProductRepository,
              private readonly _mapper : ProductMapper) {}

  async getAll(): Promise<Product[]> {
      let result = await this._repository.getAll();
     return result;
  }

  async getById(id : any): Promise<Product> {
    let result = await this._repository.getById(id);
    return result;
  }

  async add(dto: RequestProductDto): Promise<Product> {
    const product = this._mapper.singleToSchema(dto);
    return this._repository.add(product);
  }

  async update(
    id: any,
    dto: RequestProductDto,
  ): Promise<Product> {
    const product = this._mapper.singleToSchema(dto);
    return this._repository.update(id, product);
  }

}


