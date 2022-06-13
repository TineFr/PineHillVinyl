import axios from "axios";
import { ProductModel} from "../models";
import { ApiResponseList } from "../redux/interfaces/api-responses/product.response.interface";


const allProductsUrl = 'http://localhost:4000/api/v1/products?limit=20&page='
const singleProductUrl = 'http://localhost:4000/api/v1/products/'

const getAllProducts = async (page : number) : Promise<ApiResponseList<ProductModel> | null> =>{
    const response = await axios.get(allProductsUrl + page);
    return response.data;
}

const getProductsSearch = async (search : string, page:number) : Promise<ApiResponseList<ProductModel> | null> =>{
    const response = await axios.get(allProductsUrl + page + '&search=' + search);
    return response.data;
}

const getProductById = async (id : string) : Promise<ProductModel | null> =>{
    const response = await axios.get(singleProductUrl + id);
    return response.data;
}


const productService = {
    getAllProducts,
    getProductById,
    getProductsSearch
    
}

export default productService;