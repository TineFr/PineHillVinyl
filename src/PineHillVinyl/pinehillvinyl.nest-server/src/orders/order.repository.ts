import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Order, OrderDocument } from "./schemas/order.schema";



@Injectable()
export class OrderRepository {
  constructor(@InjectModel(Order.name) private _model: Model<OrderDocument>) {}

    async getAll(): Promise<OrderDocument[]> {
        let result =  await this._model.find();
        return result;
    }

    async getById(id: any): Promise<OrderDocument> {
        let result =  await this._model.findById(id); 
        return result;
    }

    async getByEmail(email: string): Promise<OrderDocument> {
      let result =  await this._model.findOne({email:email}); 
      return result;
  }

    async add(prd :  Order): Promise<OrderDocument> {
      return await this._model.create(prd);  
    };

    async update(id : any, prd :  Order): Promise<OrderDocument> {
        await this._model.findByIdAndUpdate(id, prd);  
        return this._model.findById(id);
    }

    async delete(id :  any): Promise<OrderDocument> {
      return await this._model.findByIdAndDelete(id); 
    };

}
