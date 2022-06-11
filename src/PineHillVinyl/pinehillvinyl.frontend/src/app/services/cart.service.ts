import axios from "axios";
import { CartModel } from "../models/cart/cart.model";


const getByUser = async (id : string) : Promise<CartModel | null>  =>{
    const response = await axios.get('http://localhost:4000/api/v1/carts/' + id);
    return response.data;
}

const update = async (id: string, model : CartModel) : Promise<CartModel | null>  =>{
    const response = await axios.put('http://localhost:4000/api/v1/carts/' + {id}, model);
    return response.data;
}

const cartService = {
update,
getByUser
}

export default cartService;