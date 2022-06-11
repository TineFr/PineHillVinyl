import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CartRepository } from './cart.repository';
import { CreateCartDto, ResponseCartDto, UpdateCartDto } from './dtos';
import { CartMapper } from './helpers/cart-mapper.helper';



@Injectable()
export class CartService {
  constructor(private readonly _repository :  CartRepository,
              private readonly _mapper : CartMapper) {}

  async getByUserId(id : any): Promise<ResponseCartDto> {
      let result = await this._repository.getByUserId(id);
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      let mappedResult = this._mapper.schemaToResponse(result[0]);
      return mappedResult;
  }

  async update(id : any, dto: UpdateCartDto): Promise<ResponseCartDto> {
    let cart = await this._repository.getById(id);
    if (!cart) throw new HttpException(`Item with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const updatedCart = this._mapper.updateDtoToSchema(dto);
    const result = await this._repository.update(id, updatedCart);
    let mappedResult = this._mapper.schemaToResponse(result)
    return mappedResult;
}

async add(dto: CreateCartDto): Promise<ResponseCartDto> {
  const mappedRequest = this._mapper.createDtoToSchema(dto);
  let result = await this._repository.add(mappedRequest);
  let mappedResult = this._mapper.schemaToResponse(result);
  return mappedResult;
}



}


