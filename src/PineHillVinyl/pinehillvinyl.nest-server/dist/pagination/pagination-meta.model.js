"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationMeta = void 0;
class PaginationMeta {
    constructor(currentPage, totalOfItems, itemsPerPage) {
        this.CurrentPage = currentPage;
        this.TotalOfItems = totalOfItems;
        this.TotalPages = Math.ceil(totalOfItems / itemsPerPage);
        this.HasNextPage = this.CurrentPage < this.TotalPages;
        this.HasPreviousPage = this.CurrentPage > 1;
    }
}
exports.PaginationMeta = PaginationMeta;
//# sourceMappingURL=pagination-meta.model.js.map