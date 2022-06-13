import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PaginationParameters } from 'src/pagination/pagination-parameters.model';
import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from './dtos';
import { GenreRepository } from './genre.repository';
import { GenreMapper } from './helpers/genre-mapper.helper';
import { Genre } from './schemas/genre.schema';



@Injectable()
export class GenreService {
  constructor(private readonly _repository :  GenreRepository,
              private readonly _mapper : GenreMapper) {}

    async getAllPaginated(pagination: PaginationParameters): Promise<ResponseGenreDto[]> {
        let result = await this._repository.getAll();
        if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
        let mappedResult = this._mapper.schemaListToResponse(result)
        return mappedResult;
    }
    
    async getById(id : any): Promise<Genre> {
            let result = await this._repository.getById(id);
            if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)
            let mappedResult = this._mapper.schemaToResponse(result)
            return mappedResult;
    }           

  async add(dto: CreateGenreDto): Promise<Genre> {
      const product = this._mapper.createDtoToSchema(dto);
      return this._repository.add(product);
  }


  async update(id: any, dto: UpdateGenreDto): Promise<Genre> {
    let result = await this._repository.getById(id);
    if (!result) throw new HttpException(`Item with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const product = this._mapper.updateDtoToSchema(dto);
    return this._repository.update(id, product);
  }

  async delete(id: any): Promise<string> {
    let product = await this._repository.delete(id);
    if (product) return 'Item was successfully deleted'; 
}

}


