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
exports.CartRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cart_schema_1 = require("./schemas/cart.schema");
let CartRepository = class CartRepository {
    constructor(_model) {
        this._model = _model;
    }
    async getById(id) {
        let result = await this._model.findById(id);
        return result;
    }
    async getByUserId(id) {
        let result = await this._model.find({ userId: id });
        return result;
    }
    async addProduct(id, prd) {
        await this._model.findByIdAndUpdate(id, { $push: { items: Object.assign({}, prd) } });
        return this._model.findById(id);
    }
    ;
    async addMultiple(id, prd) {
        prd.forEach(async (element) => {
            await this._model.findByIdAndUpdate(id, { $push: { items: Object.assign({}, element) } });
        });
        return this._model.findById(id);
    }
    ;
    async removeProduct(id, prd) {
        await this._model.findByIdAndUpdate(id, { $pull: { items: Object.assign({}, prd) } });
        return this._model.findById(id);
    }
    ;
    async update(id, prd) {
        await this._model.findByIdAndUpdate(id, prd);
        return this._model.findById(id);
    }
    ;
    async resetItems(id) {
        return await this._model.findByIdAndUpdate(id, { $set: { 'items': [] } });
    }
    ;
    async add(prd) {
        return await this._model.create(prd);
    }
    ;
    async delete(id) {
        return await this._model.findByIdAndDelete(id);
    }
    ;
};
CartRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cart_schema_1.Cart.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CartRepository);
exports.CartRepository = CartRepository;
//# sourceMappingURL=cart.repository.js.map