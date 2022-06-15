"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenresController = void 0;
const common_1 = require("@nestjs/common");
const dtos_1 = require("./dtos");
const genre_service_1 = require("./genre.service");
const product_service_1 = require("../products/product.service");
const pagination_meta_model_1 = require("../pagination/pagination-meta.model");
const pagination_parameters_model_1 = require("../pagination/pagination-parameters.model");
const pagination_service_1 = require("../pagination/pagination.service");
let GenresController = class GenresController {
    constructor(_service, _productService, _paginationService) {
        this._service = _service;
        this._productService = _productService;
        this._paginationService = _paginationService;
    }
    async findAll() {
        let result = await this._service.getAllPaginated(null);
        return result;
    }
    async addGenre(dto) {
        return this._service.add(dto);
    }
    async getProducts(id, page, limit) {
        let result = await this._productService.getByGenre(id);
        let pagination = new pagination_meta_model_1.PaginationMeta(page, result.length, limit);
        let paginationParam = new pagination_parameters_model_1.PaginationParameters(page, limit);
        let data = this._paginationService.paginate(paginationParam, result);
        return {
            data,
            pagination
        };
    }
    async updateGenre(id, dto) {
        return this._service.update(id, dto);
    }
    async deleteGenre(id) {
        return this._service.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateGenreDto]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "addGenre", null);
__decorate([
    (0, common_1.Get)(':id/products'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)("limit")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, dtos_1.UpdateGenreDto]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "updateGenre", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "deleteGenre", null);
GenresController = __decorate([
    (0, common_1.Controller)('genres'),
    __metadata("design:paramtypes", [genre_service_1.GenreService,
        product_service_1.ProductService,
        pagination_service_1.PaginationService])
], GenresController);
exports.GenresController = GenresController;
//# sourceMappingURL=genre.controller.js.map