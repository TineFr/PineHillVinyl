import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto, ResponseCartDto, UpdateCartDto } from './dtos';
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

  // @Delete(':id')
  // async deleteProduct(@Param('id') id: any) : Promise<string> {
  //   return this._service.delete(id);
  // }


}
