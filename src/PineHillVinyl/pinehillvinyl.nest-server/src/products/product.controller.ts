import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from './dtos/product.dto';
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

  @Get(':id')
  async findOne(@Param('id') id:any): Promise<Product> {
    return await this._service.getById(id);
  }

  @Post()
  async addProduct(@Body() dto: CreateProductDto) {
    return this._service.add(dto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: any,
    @Body() dto: UpdateProductDto,
  ) {
    return this._service.update(id, dto);
  }


}
