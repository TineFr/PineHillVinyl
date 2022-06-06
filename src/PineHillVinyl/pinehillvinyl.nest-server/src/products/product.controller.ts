import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../authentication/guards/jwt.guard';
import { CreateProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly _service: ProductService) {}

  @Get('')
   async findAll(): Promise<Product[]> {
    let result =  await this._service.getAll();
    return result;
  }

  // @UseGuards(JwtGuard)
  @Get(':id')
  async findOne(@Param('id') id:any): Promise<Product> {
    return await this._service.getById(id);
  }

  @Post()
  async addProduct(@Body() dto: CreateProductDto) : Promise<Product> {
    return this._service.add(dto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: any,
    @Body() dto: UpdateProductDto,
  ) : Promise<Product> {
    return this._service.update(id, dto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: any) : Promise<string> {
    return this._service.delete(id);
  }


}
