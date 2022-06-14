"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_module_1 = require("./products/product.module");
const user_module_1 = require("./users/user.module");
const dotenv = require("dotenv");
const auth_module_1 = require("./authentication/auth.module");
const genre_module_1 = require("./genres/genre.module");
const cart_module_1 = require("./carts/cart.module");
const product_module_2 = require("./pagination/product.module");
const stripe_module_1 = require("./stripe/stripe.module");
dotenv.config({ path: `${__dirname}/../.env` });
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forRoot(process.env.MONGO_URL),
            product_module_1.ProductModule,
            user_module_1.UserModule,
            genre_module_1.GenreModule,
            auth_module_1.AuthModule,
            cart_module_1.CartModule,
            product_module_2.PaginationModule,
            stripe_module_1.StripeModule],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map