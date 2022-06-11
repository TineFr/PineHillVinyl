import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import cartService from 'src/app/services/cart.service';
import { ProductModel } from '../../models';
import { CartState } from '../interfaces/cart-state.interface';
import { RootState } from '../store';




const initialState: CartState = {
    products: null,
    amountOfProducts : 0,
    totalPrice : 0,
    isLoading: false,
    isSuccess : false,
    isError : false,
    error : undefined   
}

export const addProductToCart = createAsyncThunk(
    'cart/add',
    async (product: ProductModel, thunkApi) =>{
        try {
            return await cartService.addProduct(product);          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const removeProductFromCart = createAsyncThunk(
    'cart/remove',
    async (product: ProductModel, thunkApi) =>{
        try {
            return await cartService.removeProduct(product);          
            
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

        //register
        .addCase(addProductToCart.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(addProductToCart.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.amountOfProducts! += 1
            state.products = action.payload?.products
            state.totalPrice = action.payload?.totalPrice
        })
        .addCase(addProductToCart.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })


        // //login
        // .addCase(login.pending, (state) =>{
        //     state.isLoading = true;
        // })
        // .addCase(login.fulfilled, (state, action) =>{
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.jwt = action.payload;
        //     state.isAuthenticated = true;
        // })
        // .addCase(login.rejected, (state, action) =>{
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.user = null;
        //     state.isAuthenticated = false;
        //     state.loginError = action.payload;
        // })

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