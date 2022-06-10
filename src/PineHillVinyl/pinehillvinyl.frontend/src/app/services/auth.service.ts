import axios from "axios";
import { DecodedJwtModel, JwtModel, LoginModel, RegisterModel, UserModel } from "../models";
import jwt_decode from "jwt-decode";


const register = async (model : RegisterModel) : Promise<UserModel | null> =>{
    const response = await axios.post(`${process.env.BASE_URL}/auth/register`, model);
    return response.data;
}

const login = async (model : LoginModel) : Promise<JwtModel | null> =>{
    const response = await axios.post('http://localhost:4000/api/v1/auth/login', model);
    if (response.data){
        localStorage.setItem("jwt", response.data.jwt)
        // const decodedJwt : DecodedJwtModel = jwt_decode(response.data.jwt)
        // localStorage.setItem('user', decodedJwt.user.email)
    }
    return response.data;
}

const logout = () =>{
    localStorage.removeItem('user');
    localStorage.removeItem('jwt');
}


const authService = {
register,
login,
logout,
}

export default authService;