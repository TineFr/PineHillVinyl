import { TablePaginationBaseProps } from "@material-ui/core";
import { CartModel, ProductModel } from "src/app/models";
import { PaginationModel } from "./pagination.interface";

export interface ApiResponseList<T>{
    data : T[],
    pagination: PaginationModel
}