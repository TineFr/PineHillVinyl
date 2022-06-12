
import { Injectable } from '@nestjs/common';
import { PaginationParameters } from 'src/pagination/pagination-parameters.model';



@Injectable()
export class PaginationService<T> {
  constructor() {}
   paginate(pagination: PaginationParameters, list : Array<T>): Array<T> {
    return list.slice((pagination.page - 1) * pagination.limit)
               .slice(0, pagination.limit);
    }
}


