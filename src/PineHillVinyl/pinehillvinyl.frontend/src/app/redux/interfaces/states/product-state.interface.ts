

import { ProductModel } from "src/app/models";
import { PaginationModel } from "../api-responses/pagination.interface";
import { BaseState } from "./base-state.interface";

export interface ProductState extends BaseState{
    products?: ProductModel[] | null;
    singleProduct? : ProductModel | null;
    pagination? : PaginationModel | null;
}