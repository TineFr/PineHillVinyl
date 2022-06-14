import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CartItem } from "./dtos";
import { Cart, CartDocument } from "./schemas/cart.schema";



@Injectable()
export class CartRepository {
  constructor(@InjectModel(Cart.name) private _model: Model<CartDocument>) {}

    // async getAll(): Promise<CartDocument[]> {
    //     let result =  await this._model.find();
    //     return result;
    // }

    async getById(id: any): Promise<CartDocument> {
        let result =  await this._model.findById(id); 
        return result;
    }

    async addProduct(id: any, prd :  CartItem): Promise<CartDocument> {
      return await this._model.findByIdAndUpdate(id, 
        { $push: {  items: {...prd}  }  }
     ) 
    };

    async getByUserId(id: any): Promise<CartDocument[]> {
      let result =  await this._model.find({userId : id});
      return result;
  }

    async add(prd :  Cart): Promise<CartDocument> {
      return await this._model.create(prd);  
    };

    async update(id : any, prd :  Cart): Promise<CartDocument> {
        await this._model.findByIdAndUpdate(id, prd);  
        return this._model.findById(id);
    }

    // async delete(id :  any): Promise<CartDocument> {
    //   return await this._model.findByIdAndDelete(id); 
    // };

}
