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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_mapper_helper_1 = require("./helpers/user-mapper.helper");
const user_repository_1 = require("./user.repository");
let UserService = class UserService {
    constructor(_repository, _mapper) {
        this._repository = _repository;
        this._mapper = _mapper;
    }
    async getAll() {
        let result = await this._repository.getAll();
        if (!result)
            throw new common_1.HttpException('No results found', common_1.HttpStatus.NOT_FOUND);
        let mappedResult = this._mapper.schemaListToResponse(result);
        return mappedResult;
    }
    async getById(id) {
        let result = await this._repository.getById(id);
        if (!result)
            throw new common_1.HttpException('No results found', common_1.HttpStatus.NOT_FOUND);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    async getByEmail(email) {
        let result = await this._repository.getByEmail(email);
        if (result) {
            let mappedResult = this._mapper.schemaToResponse(result);
            return mappedResult;
        }
        return null;
    }
    async add(dto) {
        const mappedRequest = this._mapper.createDtoToSchema(dto);
        let result = await this._repository.add(mappedRequest);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    async update(id, dto) {
        let product = await this._repository.getById(id);
        if (!product)
            throw new common_1.HttpException(`Item with id ${id} does not exist`, common_1.HttpStatus.NOT_FOUND);
        const mappedRequest = this._mapper.updateDtoToSchema(dto);
        let result = await this._repository.update(id, mappedRequest);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
    async delete(id) {
        let product = await this._repository.delete(id);
        if (product)
            return 'Record was successfully deleted';
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        user_mapper_helper_1.UserMapper])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map