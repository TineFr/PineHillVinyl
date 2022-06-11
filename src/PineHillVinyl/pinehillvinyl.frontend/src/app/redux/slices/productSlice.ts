import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import cartService from 'src/app/services/cart.service';
import productService from 'src/app/services/product.service';
import { CartModel, ProductModel } from '../../models';
import { CartState } from '../interfaces/cart-state.interface';
import { ProductState } from '../interfaces/product-state.interface';
import { RootState } from '../store';


const initialState: ProductState = {
    products: null,
    isLoading: false,
    isSuccess : false,
    isError : false,
    error : undefined,
    singleProduct : null ,
}

export const getProducts = createAsyncThunk(
    'product/getProducts',
    async (page: number, thunkApi) =>{
        try {
            return await productService.getAllProducts(page);          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

// export const getProductsFiltered = createAsyncThunk(
//     'product/getProducts',
//     async (request: Object, thunkApi) =>{
//         try {
//             return await productService.(request);          
//         } catch (err : any) {
//             return thunkApi.rejectWithValue(err.response.data.message)
//         }
//     }
// )

export const getProductById = createAsyncThunk(
    'product/getProductById',
    async (id: any, thunkApi) =>{
        try {
            return await productService.getProductById(id);              
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        resetFetchStates : (state) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.error = undefined;
        },
        resetProducts : (state) =>{
            state.singleProduct = null;
            state.products = null;
        }

    },
    extraReducers: (builder) =>{
        builder

        //getAllProducts
        .addCase(getProducts.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(getProducts.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })

        // //getProductsFiltered
        // .addCase(getProducts.pending, (state) =>{
        //     state.isLoading = true;
        // })
        // .addCase(getProducts.fulfilled, (state, action) =>{
        //     state.isLoading = false;
        //     state.isSuccess = true;
        //     state.products = action.payload
        // })
        // .addCase(getProducts.rejected, (state, action) =>{
        //     state.isLoading = false;
        //     state.isError = true;
        //     state.error = action.payload;
        // })

        //getSingleProduct
        .addCase(getProductById.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(getProductById.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.singleProduct = action.payload
        })
        .addCase(getProductById.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })


    }
});

export const {resetFetchStates, resetProducts} = productSlice.actions;
export default productSlice.reducer;