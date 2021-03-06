import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";


@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private _model: Model<ProductDocument>) {}


    async get(): Promise<ProductDocument[]> {
      let result =  await this._model.find().sort({ title: 1 }).exec();
      return result;
  }

    async getById(id: any): Promise<ProductDocument> {
        let result =  await this._model.findById(id); 
        return result;
    }

    async getByGenre(genreId: any): Promise<ProductDocument[]> {
      let result =  await this._model.find({genres : genreId}).exec(); 
      return result;
  }

    async add(prd :  Product): Promise<ProductDocument> {
      return await this._model.create(prd);  
    };

    async update(id : any, prd :  Product): Promise<ProductDocument> {
        await this._model.findByIdAndUpdate(id, prd);  
        return this._model.findById(id);
    }

    async delete(id :  any): Promise<ProductDocument> {
      return await this._model.findByIdAndDelete(id); 
    };

}
