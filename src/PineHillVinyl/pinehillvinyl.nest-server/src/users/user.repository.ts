import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument, User } from "./schemas/user.schema";


@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private _model: Model<UserDocument>) {}

    async getAll(): Promise<User[]> {
        let result =  await this._model.find();
        return result;
    }

    async getById(id: any): Promise<User> {
        let result =  await this._model.findById(id); 
        return result;
    }

    async add(prd :  User): Promise<User> {
      return await this._model.create(prd);  
    };

    async update(id : any, prd :  User): Promise<User> {
        await this._model.findByIdAndUpdate(id, prd);  
        return this._model.findById(id);
    }

}
