import axios from "axios";
import { ProductModel} from "../models";


const allProductsUrl = 'http://localhost:4000/api/v1/products?limit=20&page='
const singleProductUrl = 'http://localhost:4000/api/v1/products/'

const getAllProducts = async (page : number) : Promise<ProductModel[] | null> =>{
    const response = await axios.get(allProductsUrl + page);
    return response.data;
}

// const getFilteredProducts = async (filter : FilterObject, page:number) : Promise<JwtModel | null> =>{
//     const response = await axios.get(allProductsUrl + page, { params: filter });
//     return response.data;
// }

const getProductById = async (id : string) : Promise<ProductModel | null> =>{
    const response = await axios.get(singleProductUrl + id);
    return response.data;
}


const productService = {
    getAllProducts,
    getProductById,
}

export default productService;