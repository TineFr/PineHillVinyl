import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { PaginationParameters } from '../shared-models/pagination.model';
import { JwtGuard } from '../authentication/guards/jwt.guard';
import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { FilterProductDto } from './dtos/product-filter.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly _service: ProductService) {}

  @Get()
   async findAll(
    @Query('page') page : number,
    @Query("limit") limit : number,
    @Query("artist") artist : string
   ): Promise<ResponseProductDto[]> {
    let result =  await this._service.getAllPaginated(new PaginationParameters(page,limit), 
                                                      new FilterProductDto(artist));
    return result;
  }

  // @UseGuards(JwtGuard)
  @Get(':id')
  async findOne(@Param('id') id:any): Promise<ResponseProductDto> {
    return await this._service.getById(id);
  }

  @Post()
  async addProduct(@Body() dto: CreateProductDto) : Promise<ResponseProductDto> {
    return this._service.add(dto);
  }
  @Put(':id')
  async updateProduct(
    @Param('id') id: any,
    @Body() dto: UpdateProductDto,
  ) : Promise<ResponseProductDto> {
    return this._service.update(id, dto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: any) : Promise<string> {
    return this._service.delete(id);
  }


}
