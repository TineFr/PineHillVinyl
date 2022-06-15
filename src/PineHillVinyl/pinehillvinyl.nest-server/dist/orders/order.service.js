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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const stripe_service_1 = require("../stripe/stripe.service");
const user_service_1 = require("../users/user.service");
const order_mapper_helper_1 = require("./helpers/order-mapper.helper");
const order_repository_1 = require("./order.repository");
let OrderService = class OrderService {
    constructor(_stripeService, _userService, _mapper, _repository) {
        this._stripeService = _stripeService;
        this._userService = _userService;
        this._mapper = _mapper;
        this._repository = _repository;
    }
    async add(user, cart) {
        try {
            this._stripeService.checkout(cart);
        }
        catch (error) {
            throw new common_1.HttpException('Something went wrong during payment', common_1.HttpStatus.BAD_REQUEST);
        }
        let client = await this._userService.getById(user.id);
        if (!client)
            throw new common_1.HttpException('This user does not exist', common_1.HttpStatus.NOT_FOUND);
        const mappedRequest = this._mapper.ToSchema(client, cart);
        let result = await this._repository.add(mappedRequest);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stripe_service_1.StripeService,
        user_service_1.UserService,
        order_mapper_helper_1.OrderMapper,
        order_repository_1.OrderRepository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map