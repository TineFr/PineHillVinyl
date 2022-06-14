import { JwtModel, UserModel } from "../../../models";
import { BaseState } from "./base-state.interface";

export interface AuthState extends BaseState{
    user?: UserModel | null;
    jwt? : JwtModel | null;
    isAuthenticated? : boolean;
    loginError : any;
    registerError : any;
    loginIsSuccess : boolean;
    registerIsSuccess : boolean



}