"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationParameters = void 0;
class PaginationParameters {
    constructor(page, limit) {
        this.limit = limit > 100 ? 100 : limit;
        this.page = page;
        this.skips = this.limit * (this.page - 1);
    }
}
exports.PaginationParameters = PaginationParameters;
//# sourceMappingURL=pagination-parameters.model.js.map