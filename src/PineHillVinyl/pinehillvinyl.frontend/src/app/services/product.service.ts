import axios from "axios";
import { ProductModel} from "../models";
import { ApiResponseList } from "../redux/interfaces/api-responses/product.response.interface";


const allProductsUrl = 'http://localhost:4000/api/v1/products?limit=20&page='
const singleProductUrl = 'http://localhost:4000/api/v1/products/'

const getAllProducts = async (page : number) : Promise<ApiResponseList<ProductModel> | null> =>{
    const response = await axios.get(allProductsUrl + page);
    return response.data;
}

const sortProducts = async (sortOption : string, products : ProductModel[]) : Promise<ProductModel[]>  =>{
    let test : ProductModel[] =  [];
    let testtest = [...products]
    switch (sortOption) {

        case 'Price: Low-High':
            test = testtest.sort((a, b) => a.title.localeCompare(b.title))
            break;
        case 'Price: High-Low':
            test =testtest.sort((a, b) => a.title.localeCompare(b.title))
            break;
        case 'Alphabetically: A-Z':
            test =testtest.sort((a, b) => a.title.localeCompare(b.title))
        break;
        case 'Alphabetically: Z-A':
            test = testtest.sort((a, b) => b.title.localeCompare(a.title))
            break;

      
    }
    return test;


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
    getProductsSearch,
    sortProducts
    
}

export default productService;