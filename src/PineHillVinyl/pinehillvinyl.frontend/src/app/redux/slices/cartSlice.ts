import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import cartService from 'src/app/services/cart.service';
import { CartModel, ProductModel } from '../../models';
import { CartState } from '../interfaces/cart-state.interface';
import { RootState } from '../store';


const initialState: CartState = {
    products: null,
    amountOfProducts : 0,
    totalPrice : 0,
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

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        reset : (state) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.error = undefined;
        }

    },
    extraReducers: (builder) =>{
        builder

        //addProduct
        .addCase(getUserCart.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(getUserCart.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.cart = action.payload
        })
        .addCase(getUserCart.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })

    }
});

export const {reset} = cartSlice.actions;
export const amountOfProducts = (state:RootState) =>{
    return state.cart.amountOfProducts;
};
// export const jwt = (state:RootState) =>{
//     return state.auth.jwt;
// };
export default cartSlice.reducer;