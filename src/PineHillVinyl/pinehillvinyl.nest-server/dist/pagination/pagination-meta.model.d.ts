export declare class PaginationMeta {
    TotalPages: number;
    TotalOfItems: number;
    CurrentPage: number;
    HasPreviousPage: boolean;
    HasNextPage: boolean;
    constructor(currentPage: number, totalOfItems: number, itemsPerPage: number);
}
