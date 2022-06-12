import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PaginationParameters } from "src/pagination/pagination-parameters.model";
import { Genre, GenreDocument } from "./schemas/genre.schema";



@Injectable()
export class GenreRepository {
  constructor(@InjectModel(Genre.name) private _model: Model<GenreDocument>) {}


    async add(genre : Genre): Promise<Genre> {
      return await this._model.create(genre);  
    };

    async update(id : any, genre :  Genre): Promise<Genre> {
        await this._model.findByIdAndUpdate(id, genre);  
        return this._model.findById(id);
    }

    async delete(id :  any): Promise<Genre> {
      return await this._model.findByIdAndDelete(id); 
    };

    
    async getAllPaginated(pagination : PaginationParameters): Promise<GenreDocument[]> {
        let result =  await this._model.find().skip(pagination.skips).limit(pagination.limit);
        return result;
    }

    async getById(id: any): Promise<GenreDocument> {
        let result =  await this._model.findById(id); 
        return result;
    }

}
