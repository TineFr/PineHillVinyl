import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { StripeService } from '../stripe/stripe.service';
import { UserService } from '../users/user.service';
import { Cart } from '../carts/schemas/cart.schema';
import { OrderMapper } from './helpers/order-mapper.helper';
import { OrderRepository } from './order.repository';

@Injectable()
export class OrderService {


constructor(private _stripeService : StripeService,
            private _userService : UserService,
            private _mapper : OrderMapper,
            private _repository : OrderRepository ){}

async add(user : any, cart : any) {
        try{
            this._stripeService.checkout(cart);
        } catch(error : any){
            throw new HttpException('Something went wrong during payment', HttpStatus.BAD_REQUEST)
        }
        let client = await this._userService.getById(user.id);
        if (!client) throw new HttpException('This user does not exist', HttpStatus.NOT_FOUND)
        const mappedRequest = this._mapper.ToSchema(client, cart);
        let result = await this._repository.add(mappedRequest);
        let mappedResult = this._mapper.schemaToResponse(result);
        return mappedResult;
}

}







