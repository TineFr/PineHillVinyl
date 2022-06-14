import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req } from '@nestjs/common';
import { PaginationParameters } from '../pagination/pagination-parameters.model';
import { JwtGuard } from '../authentication/guards/jwt.guard';
import { CreateProductDto, ResponseProductDto, UpdateProductDto } from './dtos';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { FilterProductDto } from './dtos/product-filter.dto';
import {Request} from 'express';
import { PaginationService } from '../pagination/pagination.service';
import { PaginationMeta } from '../pagination/pagination-meta.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly _service: ProductService,
              private readonly _paginationService: PaginationService<ResponseProductDto>) {}


  @Get()
  async get(
    @Query('page') page : number,
    @Query("limit") limit : number,
    @Query("search") search : string,
  ){
  
   let result = await this._service.get(search);
   let pagination = new PaginationMeta(page, result.length, limit);
   let paginationParam = new PaginationParameters(page, limit);
   let data = this._paginationService.paginate(paginationParam, result);
   

   return{
    data,
    pagination
   }
 }

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
