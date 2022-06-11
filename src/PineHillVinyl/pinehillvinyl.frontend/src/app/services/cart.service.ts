import axios from "axios";
import { DecodedJwtModel, JwtModel, LoginModel, ProductModel, RegisterModel, UserModel } from "../models";
import jwt_decode from "jwt-decode";
import { CartModel } from "../models/cart/cart.model";




const addProduct = async (model : ProductModel) : Promise<CartModel | null>  =>{
    // const response = await axios.post('http://localhost:4000/api/v1/auth/register', model);
    // return response.data;
 return null;
}

const removeProduct = async (model : ProductModel) : Promise<JwtModel | null> =>{
    const response = await axios.post('http://localhost:4000/api/v1/auth/login', model);
    if (response.data){
        localStorage.setItem("jwt", response.data.jwt)
        // const decodedJwt : DecodedJwtModel = jwt_decode(response.data.jwt)
        // localStorage.setItem('user', decodedJwt.user.email)
    }
    return response.data;
}




const cartService = {
addProduct,
removeProduct,
}

export default cartService;