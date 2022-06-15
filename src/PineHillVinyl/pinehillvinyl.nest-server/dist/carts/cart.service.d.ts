import { ProductRepository } from '../products/product.repository';
import { CartRepository } from './cart.repository';
import { CreateCartDto, ResponseCartDto } from './dtos';
import { CartMapper } from './helpers/cart-mapper.helper';
export declare class CartService {
    private readonly _repository;
    private readonly _mapper;
    private readonly _productRepository;
    constructor(_repository: CartRepository, _mapper: CartMapper, _productRepository: ProductRepository);
    getByUserId(id: any): Promise<ResponseCartDto>;
    addProduct(id: any, prd: any): Promise<ResponseCartDto>;
    update(id: any, dto: any): Promise<ResponseCartDto>;
    removeProduct(id: any, prd: any): Promise<ResponseCartDto>;
    delete(id: any): Promise<string>;
    add(dto: CreateCartDto): Promise<ResponseCartDto>;
}
