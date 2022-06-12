import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Genre } from './schemas/genre.schema';
import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from './dtos';
import { GenreService } from './genre.service';
import { get } from 'http';



@Controller('genres')
export class GenresController {
  constructor(private readonly _service: GenreService) {}

  @Get()
   async findAll(
   ): Promise<ResponseGenreDto[]> {
    let result =  await this._service.getAllPaginated(null);
    return result;
  }

  @Post()
  async addProduct(@Body() dto: CreateGenreDto) : Promise<Genre> {
    return this._service.add(dto);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: any,
    @Body() dto: UpdateGenreDto,
  ) : Promise<Genre> {
    return this._service.update(id, dto);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: any) : Promise<string> {
    return this._service.delete(id);
  }


}
