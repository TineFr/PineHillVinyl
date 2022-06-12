export class PaginationMeta{
    TotalPages: number;
    TotalOfItems : number;
    CurrentPage: number;
    HasPreviousPage : boolean;
    HasNextPage : boolean;

    constructor(currentPage : number, totalOfItems : number, itemsPerPage : number){
        this.CurrentPage = currentPage;
        this.TotalOfItems = totalOfItems;
        this.TotalPages =  Math.ceil(totalOfItems / itemsPerPage);
        this.HasNextPage = this.CurrentPage < this.TotalPages;
        this.HasPreviousPage = this.CurrentPage > 1;

    }
  

}