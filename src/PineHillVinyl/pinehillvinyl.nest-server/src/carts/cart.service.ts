import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductRepository } from '../products/product.repository';
import { CartRepository } from './cart.repository';
import { CartItem, CreateCartDto, ResponseCartDto, UpdateCartDto } from './dtos';
import { CartMapper } from './helpers/cart-mapper.helper';



@Injectable()
export class CartService {
  constructor(private readonly _repository :  CartRepository,
              private readonly _mapper : CartMapper,
              private readonly _productRepository : ProductRepository) {}

  async getByUserId(id : any): Promise<ResponseCartDto> {
      let result = await this._repository.getByUserId(id);
      let test = result[0];
      if(!result) throw new HttpException('No results found', HttpStatus.NOT_FOUND)

      test.items.forEach( async (item, index) => {
        let product = await this._productRepository.getById(item.product.id);
        if (product != null){
          let productItem = this._mapper.schemaToCartProduct(product);
          item.product  = productItem;
        } else {
          test.items.splice(index, 1);
          this.removeProduct(test.id, product )
        } 
      });
      let mappedResult = this._mapper.schemaToResponse(test);
      return mappedResult;
  }

  async addProduct(id: any, prd :  any): Promise<ResponseCartDto> {
    await this._repository.addProduct(id, prd)
    let result = await this._repository.getById(id);
    let mappedResult = this._mapper.schemaToResponse(result);
    return mappedResult;

  };

  async addMultiple(id: any, prd :  any): Promise<ResponseCartDto> {
    await this._repository.addMultiple(id, prd)
    let result = await this._repository.getById(id);
    let mappedResult = this._mapper.schemaToResponse(result);
    return mappedResult;

  };

  async update(id: any, dto :  any): Promise<ResponseCartDto> {
    let cart = await this._repository.getById(id);
    if (!cart) throw new HttpException(`Cart with id ${id} does not exist`, HttpStatus.NOT_FOUND)

    const mappedRequest = this._mapper.updateDtoToSchema(dto);
    let result = await this._repository.update(id, mappedRequest);
    let mappedResult = this._mapper.schemaToResponse(result);
    return mappedResult;

  };

  async removeProduct(id: any, prd :  any): Promise<ResponseCartDto> {
    await this._repository.removeProduct(id, prd)
    let result = await this._repository.getById(id);
    let mappedResult = this._mapper.schemaToResponse(result);
    return mappedResult;

  };

  async delete(id: any): Promise<string> {
   let cart= await this._repository.delete(id)
   if (cart) return 'Cart is successfully deleted';
  
  };

  async add(dto: CreateCartDto): Promise<ResponseCartDto> {
      const mappedRequest = this._mapper.createDtoToSchema(dto);
      let result = await this._repository.add(mappedRequest);
      let mappedResult = this._mapper.schemaToResponse(result);
      return mappedResult;
}

}


