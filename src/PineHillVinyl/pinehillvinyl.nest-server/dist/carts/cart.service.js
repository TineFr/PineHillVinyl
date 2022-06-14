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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const cart_repository_1 = require("./cart.repository");
const cart_mapper_helper_1 = require("./helpers/cart-mapper.helper");
let CartService = class CartService {
    constructor(_repository, _mapper) {
        this._repository = _repository;
        this._mapper = _mapper;
    }
    async getByUserId(id) {
        let result = await this._repository.getByUserId(id);
        if (!result)
            throw new common_1.HttpException('No results found', common_1.HttpStatus.NOT_FOUND);
        let mappedResult = this._mapper.schemaToResponse(result[0]);
        return mappedResult;
    }
    async update(id, dto) {
        let cart = await this._repository.getById(id);
        if (!cart)
            throw new common_1.HttpException(`Item with id ${id} does not exist`, common_1.HttpStatus.NOT_FOUND);
        const updatedCart = this._mapper.updateDtoToSchema(dto);
        const result = await this._repository.update(id, updatedCart);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    async add(dto) {
        const mappedRequest = this._mapper.createDtoToSchema(dto);
        let result = await this._repository.add(mappedRequest);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
};
CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_repository_1.CartRepository,
        cart_mapper_helper_1.CartMapper])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map