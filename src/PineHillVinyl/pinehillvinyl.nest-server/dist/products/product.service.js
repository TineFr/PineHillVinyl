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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_mapper_helper_1 = require("./helpers/product-mapper.helper");
const product_repository_1 = require("./product.repository");
let ProductService = class ProductService {
    constructor(_repository, _mapper) {
        this._repository = _repository;
        this._mapper = _mapper;
    }
    async getAll() {
        let result = await this._repository.getAll();
        if (!result)
            throw new common_1.HttpException('No results found', common_1.HttpStatus.NOT_FOUND);
        return result;
    }
    async getById(id) {
        let result = await this._repository.getById(id);
        if (!result)
            throw new common_1.HttpException('No results found', common_1.HttpStatus.NOT_FOUND);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    async add(dto) {
        const product = this._mapper.createDtoToSchema(dto);
        return this._repository.add(product);
    }
    async update(id, dto) {
        let result = await this._repository.getById(id);
        if (!result)
            throw new common_1.HttpException(`Item with id ${id} does not exist`, common_1.HttpStatus.NOT_FOUND);
        const product = this._mapper.updateDtoToSchema(dto);
        return this._repository.update(id, product);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        product_mapper_helper_1.ProductMapper])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map