import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartItem, CreateCartDto, ResponseCartDto, UpdateCartDto } from './dtos';
import { Cart } from './schemas/cart.schema';


@Controller('carts')
export class CartsController {
  constructor(private readonly _service: CartService) {}

  @Get(':id')
  async findByUserId(@Param('id') id:any): Promise<ResponseCartDto> {
    return await this._service.getByUserId(id);
  }

  @Put(':id')
  async updateCart(
    @Param('id') id: any,
    @Body() dto: UpdateCartDto,
  ) {
    return this._service.update(id, dto);
  }

  @Put(':id/addProduct')
  async addProduct(
    @Param('id') id:any,
    @Body() body : {dto : CartItem},
  ) {
    return this._service.addProduct(id, body);
  }

  // @Delete(':id')
  // async deleteProduct(@Param('id') id: any) : Promise<string> {
  //   return this._service.delete(id);
  // }


}
