import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";


@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private _model: Model<ProductDocument>) {}

    async getAll(): Promise<Product[]> {
      return await this._model.find();
    }

    async getById(id: any): Promise<Product> {
     return await this._model.findById(id);    
    };

    async add(prd :  Product): Promise<Product> {
      return await this._model.create(prd);  
    };

    async update(id : any, prd :  Product): Promise<Product> {
       await this._model.findByIdAndUpdate(id, prd);  
       return this._model.findById(id);
    };
}
