
import axios from "axios";
import { ProductModel } from "../models";
import { CartItem } from "../models/cart/cart-item.model";
import { CartModel } from "../models/cart/cart.model";

const baseUrl = 'http://localhost:4000/api/v1/carts/'


const getByUser = async (id : string) : Promise<CartModel | null>  =>{
    const response = await axios.get(baseUrl + id);
    let result : any;
     await saveLocalStorage(response.data.id).then( async res =>{
        result = await axios.get(baseUrl + id);
     }
    );
    return result.data;
}

const update = async (id: string, model : CartModel) : Promise<CartModel | null>  =>{
    const response = await axios.put(baseUrl + id, model);
    return response.data;
}

const updateLocally = async (model : any) :  Promise<any>  =>{

    removeProductLocally(model.product);
    addProductLocally(model.product, model.quantity)
}


const saveLocalStorage = async (id : string) : Promise<any>  =>{
    let products;
    if(localStorage.getItem('items')){
        products = JSON.parse(localStorage.getItem('items') || '[]');
    }
    if (products){
        await axios.put(baseUrl + id + '/addMultiple', products);
    }
    localStorage.removeItem('items');

}

const addToCart = async (id: string, model : ProductModel) : Promise<any>  =>{
    const cartItem : CartItem= {
        product: model,
        quantity: 1
    }
    const response = await axios.put(baseUrl + id + '/addProduct', cartItem);
    return response.data;
}

const removeFromCart = async (id: string, model : ProductModel) : Promise<any>  =>{
    const cartItem : CartItem= {
        product: model,
        quantity: 1
    }
    const response = await axios.put(baseUrl + id + '/removeProduct', cartItem);
    return response.data;
}

const addProductLocally = async (model : any, quantity?: any) =>{
    let products;
    if(localStorage.getItem('items')){

      products = JSON.parse(localStorage.getItem('items') || '[]');
    } else products = [];
    products.push({
        'product' : {'id' : model.id, 'image' : model.image, 'price' : model.price, 'artist' : model.artist, 'title' : model.title},
        'quantity' : quantity ? quantity : 1
    });
    localStorage.setItem('items', JSON.stringify(products));
}


const removeProductLocally = async (model : any) =>{
    let products;
    if(localStorage.getItem('items')){

      products = JSON.parse(localStorage.getItem('items') || '[]');
    } else products = [];
    products = products.filter((x : any) => x.product.id !== model.id );
    localStorage.setItem('items', JSON.stringify(products));
}

const cartService = {
update,
getByUser,
addToCart,
addProductLocally,
removeFromCart,
removeProductLocally,
updateLocally
}

export default cartService;