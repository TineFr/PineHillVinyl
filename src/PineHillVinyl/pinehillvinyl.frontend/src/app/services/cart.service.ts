import { AmpStoriesOutlined } from "@material-ui/icons";
import axios from "axios";
import { ProductModel } from "../models";
import { CartItem } from "../models/cart/cart-item.model";
import { CartModel } from "../models/cart/cart.model";

const baseUrl = 'http://localhost:4000/api/v1/carts/'


const getByUser = async (id : string) : Promise<CartModel | null>  =>{
    const response = await axios.get(baseUrl + id);
    let result = await saveLocalStorage(response.data.id);
    return result;

}

const update = async (id: string, model : CartModel) : Promise<CartModel | null>  =>{
    const response = await axios.put(baseUrl + id, model);
    return response.data;
}

const saveLocalStorage = async (id : string) : Promise<any>  =>{
    let products;
    if(localStorage.getItem('items')){
        products = JSON.parse(localStorage.getItem('items') || '[]');
    }
    let result : any;
    await axios.put(baseUrl + id + '/addMultiple', products).then(res => result = res.data);
    localStorage.removeItem('items');
    return result;
}

const addToCart = async (id: string, model : ProductModel) : Promise<any>  =>{
    const cartItem : CartItem= {
        product: model,
        quantity: 1
    }
    const response = await axios.put(baseUrl + id + '/addProduct', cartItem);
    return response.data;
}

const addProductLocally = async (model : ProductModel) =>{
    let products;
    if(localStorage.getItem('items')){

      products = JSON.parse(localStorage.getItem('items') || '[]');
    } else products = [];
    products.push({
        'product' : {'id' : model.id, 'image' : model.image, 'price' : model.price, 'artist' : model.artist, 'title' : model.title},
        'quantity' : 1
    });
    localStorage.setItem('items', JSON.stringify(products));

}

const cartService = {
update,
getByUser,
addToCart,
addProductLocally
}

export default cartService;