import { PaginationParameters } from 'src/pagination/pagination-parameters.model';
export declare class PaginationService<T> {
    constructor();
    paginate(pagination: PaginationParameters, list: Array<T>): Array<T>;
}
