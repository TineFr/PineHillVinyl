import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Genre } from './schemas/genre.schema';
import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from './dtos';
import { GenreService } from './genre.service';
import { Product, ProductDocument } from '../products/schemas/product.schema';
import { ProductService } from '../products/product.service';
import { ResponseProductDto } from '../products/dtos';
import { PaginationMeta } from 'src/pagination/pagination-meta.model';
import { PaginationParameters } from 'src/pagination/pagination-parameters.model';
import { PaginationService } from 'src/pagination/pagination.service';



@Controller('genres')
export class GenresController {
  constructor(private readonly _service: GenreService,
              private readonly _productService: ProductService,
              private readonly _paginationService: PaginationService<ResponseProductDto>) {}

  @Get()
   async findAll(
   ): Promise<ResponseGenreDto[]> {
    let result =  await this._service.getAllPaginated(null);
    return result;
  }

  @Post()
  async addGenre(@Body() dto: CreateGenreDto) : Promise<Genre> {
    return this._service.add(dto);
  }

  @Get(':id/products')
  async getProducts(
    @Param('id') id: any,
    @Query('page') page : number,
    @Query("limit") limit : number,
    
    ) : Promise<any> {
      let result = await this._productService.getByGenre(id);
     let pagination = new PaginationMeta(page, result.length, limit);
     let paginationParam = new PaginationParameters(page, limit);
     let data = this._paginationService.paginate(paginationParam, result);
    
     return{
      data,
      pagination
     }
  }

  @Put(':id')
  async updateGenre(
    @Param('id') id: any,
    @Body() dto: UpdateGenreDto,
  ) : Promise<Genre> {
    return this._service.update(id, dto);
  }

  @Delete(':id')
  async deleteGenre(@Param('id') id: any) : Promise<string> {
    return this._service.delete(id);
  }


}
