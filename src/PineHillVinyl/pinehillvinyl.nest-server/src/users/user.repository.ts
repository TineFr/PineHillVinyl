import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument, User } from "./schemas/user.schema";


@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private _model: Model<UserDocument>) {}

    async getAll(): Promise<UserDocument[]> {
        let result =  await this._model.find();
        return result;
    }

    async getById(id: any): Promise<UserDocument> {
        let result =  await this._model.findById(id); 
        return result;
    }

    async getByEmail(email: string): Promise<UserDocument> {
      let result =  await this._model.findOne({email:email}); 
      return result;
  }

    async add(prd :  User): Promise<UserDocument> {
      return await this._model.create(prd);  
    };

    async update(id : any, prd :  User): Promise<UserDocument> {
        await this._model.findByIdAndUpdate(id, prd);  
        return this._model.findById(id);
    }

    async delete(id :  any): Promise<UserDocument> {
      return await this._model.findByIdAndDelete(id); 
    };

}
