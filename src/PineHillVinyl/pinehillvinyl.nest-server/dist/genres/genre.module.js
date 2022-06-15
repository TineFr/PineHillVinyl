"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenreModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const product_module_1 = require("../pagination/product.module");
const product_module_2 = require("../products/product.module");
const genre_controller_1 = require("./genre.controller");
const genre_repository_1 = require("./genre.repository");
const genre_service_1 = require("./genre.service");
const genre_mapper_helper_1 = require("./helpers/genre-mapper.helper");
const genre_schema_1 = require("./schemas/genre.schema");
let GenreModule = class GenreModule {
};
GenreModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: genre_schema_1.Genre.name, schema: genre_schema_1.GenreSchema
                }]), product_module_2.ProductModule, product_module_1.PaginationModule],
        controllers: [genre_controller_1.GenresController],
        providers: [genre_service_1.GenreService, genre_repository_1.GenreRepository, genre_mapper_helper_1.GenreMapper]
    })
], GenreModule);
exports.GenreModule = GenreModule;
//# sourceMappingURL=genre.module.js.map