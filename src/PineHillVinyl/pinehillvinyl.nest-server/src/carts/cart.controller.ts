import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem, CreateCartDto, ResponseCartDto, UpdateCartDto } from './dtos';



@Controller('carts')
export class CartsController {
  constructor(private readonly _service: CartService) {}

  @Get(':id')
  async findByUserId(@Param('id') id:any): Promise<ResponseCartDto> {
    return await this._service.getByUserId(id);
  }

  @Put(':id/addProduct')
  async addProduct(
    @Param('id') id:any,
    @Body() body : {dto : CartItem},
  ) {
    return this._service.addProduct(id, body);
  }

  @Put(':id/addMultiple')
  async addMultiple(
    @Param('id') id:any,
    @Body() body : {dto : CartItem []},
  ) {
    return this._service.addMultiple(id, body);
  }

  @Put(':id/removeProduct')
  async removeProduct(
    @Param('id') id:any,
    @Body() dto: {dto : CartItem},
  ) {
    return this._service.removeProduct(id, dto);
  }

  @Put(':id')
  async update(
    @Param('id') id:any,
    @Body() dto: any,
  ) {
    return this._service.update(id, dto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: any) : Promise<string> {
    return this._service.delete(id);
  }


}
