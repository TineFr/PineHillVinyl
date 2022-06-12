import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import cartService from 'src/app/services/cart.service';
import genreService from 'src/app/services/genre.service';
import productService from 'src/app/services/product.service';
import { CartModel, ProductModel } from '../../models';
import { CartState } from '../interfaces/cart-state.interface';
import { GenreState } from '../interfaces/genre-state.interface';
import { ProductState } from '../interfaces/product-state.interface';
import { RootState } from '../store';


const initialState: GenreState = {
    genres: null,
    isLoading: false,
    isSuccess : false,
    isError : false,
    error : undefined,
}

export const getGenres = createAsyncThunk(
    'genre/getGenres',
    async (undefined, thunkApi) =>{
        try {
            return await genreService.getAllGenres();          
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers:{
        resetFetchStates : (state) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.error = undefined;
        },
    },
    extraReducers: (builder) =>{
        builder

        //getAllProducts
        .addCase(getGenres.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(getGenres.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.genres = action.payload
        })
        .addCase(getGenres.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.payload;
        })
    }
});

export const {resetFetchStates} = genreSlice.actions;
export default genreSlice.reducer;