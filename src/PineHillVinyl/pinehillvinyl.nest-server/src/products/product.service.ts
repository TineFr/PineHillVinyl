import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto';
import { ProductMapper } from './helpers/album-mapper.helper';
import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema';


@Injectable()
export class ProductService {
  constructor(private readonly _repository :  ProductRepository,
              private readonly _mapper : ProductMapper) {}

  async getAll(): Promise<Product[]> {
      let result = await this._repository.getAll();
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      return result;
  }

  async getById(id : any): Promise<Product> {
      let result = await this._repository.getById(id);
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      return result;
  }

  async add(dto: CreateProductDto): Promise<Product> {
      const product = this._mapper.createDtoToSchema(dto);
      return this._repository.add(product);
  }

  async update(id: any, dto: UpdateProductDto): Promise<Product> {
    let result = await this._repository.getById(id);
    if (!result) throw new HttpException(`Item with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const product = this._mapper.updateDtoToSchema(dto);
    return this._repository.update(id, product);
  }

}


