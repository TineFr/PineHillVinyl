import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "./schemas/product.schema";



@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private _repository: Model<ProductDocument>) {}

  async getAll(): Promise<Product[]> {
    return await this._repository.find();
  }

  async getById(id: any): Promise<Product> {
    return this._repository.findById(id);
  }

  async create(item: Product): Promise<Product> {
    return this._repository.create(item);
  }

  async update(id: string, item: Product) {
    return this._repository.findByIdAndUpdate(id, item);
  }
}
