import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GenresController } from './genre.controller';
import { GenreRepository } from './genre.repository';
import { GenreService } from './genre.service';
import { GenreMapper } from './helpers/genre-mapper.helper';
import { Genre, GenreSchema } from './schemas/genre.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Genre.name, schema: GenreSchema
}])],
 controllers: [GenresController],
 providers: [GenreService, GenreRepository, GenreMapper]

})
export class GenreModule {}
