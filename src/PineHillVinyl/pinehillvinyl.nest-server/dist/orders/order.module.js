"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const user_module_1 = require("../users/user.module");
const stripe_module_1 = require("../stripe/stripe.module");
const order_controller_1 = require("./order.controller");
const order_repository_1 = require("./order.repository");
const order_service_1 = require("./order.service");
const order_mapper_helper_1 = require("./helpers/order-mapper.helper");
const mongoose_1 = require("@nestjs/mongoose");
const order_schema_1 = require("./schemas/order.schema");
const cart_module_1 = require("../carts/cart.module");
dotenv.config({ path: `${__dirname}/../.env` });
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: order_schema_1.Order.name, schema: order_schema_1.OrderSchema
                }]), stripe_module_1.StripeModule, user_module_1.UserModule, cart_module_1.CartModule],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, order_repository_1.OrderRepository, order_mapper_helper_1.OrderMapper]
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map