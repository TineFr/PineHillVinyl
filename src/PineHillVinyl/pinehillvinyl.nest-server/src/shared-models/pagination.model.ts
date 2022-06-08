export class PaginationParameters{
    page : number;
    limit : number;
    skips :  number;

    constructor(page, limit) {
        this.limit = limit > 100 ? 100 : limit;
        this.page = page;
        this.skips = this.limit * (this.page - 1);

      }    
}