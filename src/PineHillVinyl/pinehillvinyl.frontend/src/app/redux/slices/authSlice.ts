import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from 'src/app/services/auth.service';
import { JwtModel, LoginModel, RegisterModel, UserModel } from '../../models';
import { AuthState } from '../interfaces/auth-state.interface';
import { RootState } from '../store';


const storedUser: string | null = localStorage.getItem('user');
const user : UserModel | null =  storedUser ?  JSON.parse(storedUser) : null;

const storedJWT: string | null = localStorage.getItem('jwt');
const token : JwtModel | null = !!storedJWT ? JSON.parse(JSON.stringify(storedJWT)) : null;





const initialState: AuthState = {
    isLoading: false,
    isSuccess : false,
    isError : false,
    user: null,
    jwt: null,
    isAuthenticated: false,
    loginError : null,
    registerError : null,
    loginIsSuccess : false,
    registerIsSuccess : false

      
}

export const register = createAsyncThunk(
    'auth/register',
    async (user: RegisterModel, thunkApi) =>{
        try {
            return await authService.register(user);
            
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (user: LoginModel, thunkApi) =>{
        try {
            return await authService.login(user);
            
        } catch (err : any) {
            return thunkApi.rejectWithValue(err.response.data.message)
        }
    }
)


export const logout = createAsyncThunk(
    'auth/logout',
    async () =>{
            return await authService.logout();
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset : (state) =>{
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.loginError = null;
            state.registerError = null;
        }
    },
    extraReducers: (builder) =>{
        builder

        //register
        .addCase(register.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.registerIsSuccess = true;
            state.user = action.payload;
        })
        .addCase(register.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.user = null;
            state.jwt = null;
            state.registerError = action.payload;
        })


        //login
        .addCase(login.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.user = user;
            state.jwt = action.payload
            state.isAuthenticated = true;
        })
        .addCase(login.rejected, (state, action) =>{
            state.isLoading = false;
            state.loginIsSuccess = true;
            state.user = null;
            state.isAuthenticated = false;
            state.loginError = action.payload;
        })

        //logout
        .addCase(logout.pending, (state) =>{
            state.isLoading = true;
        })
        .addCase(logout.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isAuthenticated = false;
            state.user = null;
            state.jwt = null;
        })
    }
});

export const {reset} = authSlice.actions;
export const selectedUser = (state:RootState) =>{
    return state.auth.user;
};
export const jwt = (state:RootState) =>{
    return state.auth.jwt;
};
export default authSlice.reducer;