import { UserModel } from "../users/user.interface";

export interface DecodedJwtModel{
    user: UserModel;
    exp: number;
    iat: number;
}