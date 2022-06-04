import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';
import { CreateUserDto, ResponseUserDto, UpdateUserDto } from './dtos';

@Controller('users')
export class UsersController {
  constructor(private readonly _service: UserService) {}

  @Get('')
   async findAll(): Promise<ResponseUserDto[]> {
    let result =  await this._service.getAll();
    return result;
  }

  @Get(':id')
  async findOne(@Param('id') id:any): Promise<ResponseUserDto> {
    return await this._service.getById(id);
  }

  @Post()
  async addProduct(@Body() dto: CreateUserDto) {
    return this._service.add(dto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: any,
    @Body() dto: UpdateUserDto,
  ) {
    return this._service.update(id, dto);
  }


}