import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CartService } from '../carts/cart.service';
import { CreateUserDto, ResponseUserDto, UpdateUserDto } from './dtos';
import { UserMapper } from './helpers/user-mapper.helper';
import { UserRepository } from './user.repository';



@Injectable()
export class UserService {
  constructor(private readonly _repository :  UserRepository,
              private readonly _cartService :  CartService,
              private readonly _mapper : UserMapper) {}

  async getAll(): Promise<ResponseUserDto[]> {
      let result = await this._repository.getAll();
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      let mappedResult = this._mapper.schemaListToResponse(result);
      return mappedResult;
  }

  async getById(id : any): Promise<ResponseUserDto> {
      let result = await this._repository.getById(id);
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      let mappedResult = this._mapper.schemaToResponse(result);
      return mappedResult;
  }

  async getByEmail(email : string): Promise<ResponseUserDto> {
    let result = await this._repository.getByEmail(email);
    if (result) {
      let mappedResult = this._mapper.schemaToResponse(result);
      return mappedResult;
    }
    return null;
}

  async add(dto: CreateUserDto): Promise<ResponseUserDto> {
      const mappedRequest = this._mapper.createDtoToSchema(dto);
      let result = await this._repository.add(mappedRequest);
      if (result != null) await this._cartService.add({userId : result._id})
      let mappedResult = this._mapper.schemaToResponse(result);
      return mappedResult;
  }

  async update(id: any, dto: UpdateUserDto): Promise<ResponseUserDto> {
    let product = await this._repository.getById(id);
    if (!product) throw new HttpException(`Item with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const mappedRequest = this._mapper.updateDtoToSchema(dto);
    let result = await this._repository.update(id, mappedRequest);
    let mappedResult = this._mapper.schemaToResponse(result);
    return mappedResult;
  }

  async delete(id: any): Promise<string> {
    let product = await this._repository.delete(id);
    if (product) return 'Record was successfully deleted'; 
}

}


