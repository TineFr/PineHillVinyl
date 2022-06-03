import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dtos/user.dto';
import { UserMapper } from './helpers/user-mapper.helper';
import { User } from './schemas/user.schema';
import { UserRepository } from './user.repository';



@Injectable()
export class UserService {
  constructor(private readonly _repository :  UserRepository,
              private readonly _mapper : UserMapper) {}

  async getAll(): Promise<User[]> {
      let result = await this._repository.getAll();
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      return result;
  }

  async getById(id : any): Promise<User> {
      let result = await this._repository.getById(id);
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
      return result;
  }

  async add(dto: CreateUserDto): Promise<User> {
      const product = this._mapper.createDtoToSchema(dto);
      return this._repository.add(product);
  }

  async update(id: any, dto: UpdateUserDto): Promise<User> {
    let result = await this._repository.getById(id);
    if (!result) throw new HttpException(`Item with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const product = this._mapper.updateDtoToSchema(dto);
    return this._repository.update(id, product);
  }

}


