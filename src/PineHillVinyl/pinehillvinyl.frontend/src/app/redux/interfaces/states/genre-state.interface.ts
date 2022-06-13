

import { GenreModel } from "src/app/models";
import { BaseState } from "./base-state.interface";

export interface GenreState extends BaseState{
    genres?: GenreModel[] | null;
}