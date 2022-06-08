"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterProductDto = void 0;
class FilterProductDto {
    constructor(artist, genre, timePeriod, price) {
        this.artist = artist || null;
        this.genre = genre || null;
        this.price = price || null;
        this.timePeriod = timePeriod || null;
    }
}
exports.FilterProductDto = FilterProductDto;
//# sourceMappingURL=product-filter.dto.js.map