import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { MdProductionQuantityLimits } from 'react-icons/md';
import cartService from 'src/app/services/cart.service';
import { isEmptyBindingElement } from 'typescript';
import { CartModel, ProductModel } from '../../models';
import { CartState } from '../interfaces/states/cart-state.interface';
import { RootState } from '../store';


const calculateTotal = () =>{
let totalCount = 0;

if (localStorage.getItem('items')){
    JSON.parse(localStorage.getItem('items') || '{}')
    .forEach((element : any) => {
        totalCount += element.product.price * element.quantity}
    );
    }

return totalCount.toFixed(2);
}

const initialState: CartState = {

    amountOfProducts : JSON.parse(localStorage.getItem('items') || '{}').length,
    totalPrice : calculateTotal(),
    isLoading: false,
    isSuccess : false,
    isError : false,
    error : undefined,
    cart : null 

}

export const getUserCart = createAsyncThunk(
    'cart/getByUser',
    async (id: string, thunkApi) =>{
        try {
            return await cartService.getByUser(id);          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const updateCart = createAsyncThunk(
    'cart/update',
    async (cart: CartModel, thunkApi) =>{
        try {
            return await cartService.update(cart.id, cart);          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async ({id, product}: {id: string | null, product: any}, thunkApi) =>{
        try {  
            if (id)  {
                return await cartService.addToCart(id, product);
            }      
            else return await cartService.addProductLocally(product);
          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const removeFromCart = createAsyncThunk(
    'cart/removeFromCart',
    async ({id, product}: {id: string | null, product: any}, thunkApi) =>{
        try {  
            if (id)  {
                return await cartService.removeFromCart(id, product);
            }      
            else return await cartService.removeProductLocally(product);
          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        reset : (state) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.error = undefined;
        },

        resetCart : (state) =>{
            state.cart = null;
            state.amountOfProducts = 0;
            state.totalPrice = 0;
        },
    },
    extraReducers: (builder) =>{
        builder

        //getCart
        .addCase(getUserCart.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(getUserCart.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.cart = action.payload
            if (state.cart){
                state.totalPrice = 0;
                state.cart?.items.forEach(item => state.totalPrice! += item.product.price * item.quantity);
                state.totalPrice = state.totalPrice.toFixed(2);
            }
        })
        .addCase(getUserCart.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })

        //addToCart
        .addCase(addToCart.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(addToCart.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.cart = action.payload;
            state.amountOfProducts = JSON.parse(localStorage.getItem('items') || '{}').length;
            state.totalPrice = calculateTotal();
            if (state.cart){
                state.totalPrice = 0;
                state.cart?.items.forEach(item => state.totalPrice! += item.product.price * item.quantity)
            }
            
        })
        .addCase(addToCart.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })

        //removeFromCart
        .addCase(removeFromCart.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(removeFromCart.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.cart = action.payload;
            state.amountOfProducts = JSON.parse(localStorage.getItem('items') || '{}').length;
            state.totalPrice = calculateTotal();
            if (state.cart){
                state.totalPrice = 0;
                state.cart?.items.forEach(item => state.totalPrice! += item.product.price * item.quantity)
            }
            
        })
        .addCase(removeFromCart.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })

    }
});

export const {reset, resetCart} = cartSlice.actions;
export const amountOfProducts = (state:RootState) =>{
    return state.cart.amountOfProducts;
};
export default cartSlice.reducer;