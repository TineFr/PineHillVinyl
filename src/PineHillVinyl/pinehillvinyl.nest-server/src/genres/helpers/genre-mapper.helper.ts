import { CreateGenreDto, ResponseGenreDto, UpdateGenreDto } from "../dtos";
import { Genre, GenreDocument } from "../schemas/genre.schema";




export class GenreMapper {
  
     createDtoToSchema(dto : CreateGenreDto):  Genre {
      const newGenre = new Genre();
      newGenre.name = dto.name;
      return newGenre;

    }
    updateDtoToSchema(dto : UpdateGenreDto):  Genre {
      const updatedGenre = new Genre();
      updatedGenre.name = dto.name;
      return updatedGenre;

    }

    schemaToResponse(genre : GenreDocument):  ResponseGenreDto {
      const response = new ResponseGenreDto();
      response.id = genre._id
      response.name = genre.name;
      return response;

    }

    schemaListToResponse(genres : GenreDocument[]):  ResponseGenreDto[] {

      let mappedGenres = [];
      genres.forEach(genre => {
        const response = new ResponseGenreDto();
        response.id = genre._id
        response.name = genre.name;
        mappedGenres.push(response);
      });
      return mappedGenres;

    }
  }