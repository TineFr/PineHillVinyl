import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { Genre } from './schemas/genre.schema';
import { CreateGenreDto, UpdateGenreDto } from './dtos';
import { GenreService } from './genre.service';



@Controller('genres')
export class GenresController {
  constructor(private readonly _service: GenreService) {}

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
