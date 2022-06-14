import { CartRepository } from './cart.repository';
import { CreateCartDto, ResponseCartDto, UpdateCartDto } from './dtos';
import { CartMapper } from './helpers/cart-mapper.helper';
export declare class CartService {
    private readonly _repository;
    private readonly _mapper;
    constructor(_repository: CartRepository, _mapper: CartMapper);
    getByUserId(id: any): Promise<ResponseCartDto>;
    update(id: any, dto: UpdateCartDto): Promise<ResponseCartDto>;
    add(dto: CreateCartDto): Promise<ResponseCartDto>;
}
