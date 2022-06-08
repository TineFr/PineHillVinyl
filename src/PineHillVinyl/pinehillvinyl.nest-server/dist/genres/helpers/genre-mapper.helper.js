"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreMapper = void 0;
const dtos_1 = require("../dtos");
const genre_schema_1 = require("../schemas/genre.schema");
class GenreMapper {
    createDtoToSchema(dto) {
        const newGenre = new genre_schema_1.Genre();
        newGenre.name = dto.name;
        return newGenre;
    }
    updateDtoToSchema(dto) {
        const updatedGenre = new genre_schema_1.Genre();
        updatedGenre.name = dto.name;
        return updatedGenre;
    }
    schemaToResponse(genre) {
        const response = new dtos_1.ResponseGenreDto();
        response.id = genre._id;
        response.name = genre.name;
        return response;
    }
    schemaListToResponse(genres) {
        let mappedGenres = [];
        genres.forEach(genre => {
            const response = new dtos_1.ResponseGenreDto();
            response.id = genre._id;
            response.name = genre.name;
            mappedGenres.push(response);
        });
        return mappedGenres;
    }
}
exports.GenreMapper = GenreMapper;
//# sourceMappingURL=genre-mapper.helper.js.map