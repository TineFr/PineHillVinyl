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
const product_repository_1 = require("../products/product.repository");
const cart_repository_1 = require("./cart.repository");
const cart_mapper_helper_1 = require("./helpers/cart-mapper.helper");
let CartService = class CartService {
    constructor(_repository, _mapper, _productRepository) {
        this._repository = _repository;
        this._mapper = _mapper;
        this._productRepository = _productRepository;
    }
    async getByUserId(id) {
        let result = await this._repository.getByUserId(id);
        let test = result[0];
        if (!result)
            throw new common_1.HttpException('No results found', common_1.HttpStatus.NOT_FOUND);
        test.items.forEach(async (item, index) => {
            let product = await this._productRepository.getById(item.product.id);
            if (product != null) {
                let productItem = this._mapper.schemaToCartProduct(product);
                item.product = productItem;
            }
            else {
                test.items.splice(index, 1);
                this.removeProduct(test.id, product);
            }
        });
        let mappedResult = this._mapper.schemaToResponse(test);
        return mappedResult;
    }
    async addProduct(id, prd) {
        await this._repository.addProduct(id, prd);
        let result = await this._repository.getById(id);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    ;
    async addMultiple(id, prd) {
        await this._repository.addMultiple(id, prd);
        let result = await this._repository.getById(id);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    ;
    async update(id, dto) {
        let cart = await this._repository.getById(id);
        if (!cart)
            throw new common_1.HttpException(`Cart with id ${id} does not exist`, common_1.HttpStatus.NOT_FOUND);
        const mappedRequest = this._mapper.updateDtoToSchema(dto);
        let result = await this._repository.update(id, mappedRequest);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    ;
    async resetItems(id) {
        let cart = await this._repository.resetItems(id);
        let mappedResult = this._mapper.schemaToResponse(cart);
        return mappedResult;
    }
    ;
    async removeProduct(id, prd) {
        await this._repository.removeProduct(id, prd);
        let result = await this._repository.getById(id);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    ;
    async delete(id) {
        let cart = await this._repository.delete(id);
        if (cart)
            return 'Cart is successfully deleted';
    }
    ;
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
        cart_mapper_helper_1.CartMapper,
        product_repository_1.ProductRepository])
], CartService);
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map