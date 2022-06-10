import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaginationParameters } from 'src/shared-models/pagination.model';
import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { FilterProductDto } from './dtos/product-filter.dto';
import { ProductMapper } from './helpers/product-mapper.helper';
import { ProductRepository } from './product.repository';
import { Product } from './schemas/product.schema';


@Injectable()
export class ProductService {
  constructor(private readonly _repository :  ProductRepository,
              private readonly _mapper : ProductMapper) {}

  async getAllPaginated(pagination: PaginationParameters, filter: FilterProductDto): Promise<ResponseProductDto[]> {
    let result = await this._repository.getAllPaginated(pagination, filter);
    if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
    let mappedResult = this._mapper.schemaListToResponse(result)
    return mappedResult;
}

  async getById(id : any): Promise<ResponseProductDto> {
      let result = await this._repository.getById(id);
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      let mappedResult = this._mapper.schemaToResponse(result)
      return mappedResult;
  }

  async add(dto: CreateProductDto): Promise<ResponseProductDto> {
      const product = this._mapper.createDtoToSchema(dto);
      let result = await this._repository.add(product);
      let mappedResult = this._mapper.schemaToResponse(result)
      return mappedResult;
  }

  async update(id: any, dto: UpdateProductDto): Promise<ResponseProductDto> {
    let product = await this._repository.getById(id);
    if (!product) throw new HttpException(`Item with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const updatedProduct = this._mapper.updateDtoToSchema(dto);
    const result = await this._repository.update(id, product);
    let mappedResult = this._mapper.schemaToResponse(result)
    return mappedResult;
  }

  async delete(id: any): Promise<string> {
    let product = await this._repository.delete(id);
    if (product) return 'Record was successfully deleted'; 
}

}


