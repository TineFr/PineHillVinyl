import { AuthService } from "src/authentication/auth.service";

export class FilterProductDto{
    artist?: string;
    timePeriod? : string;
    genre? : string;
    price? : number;
    constructor(artist?, genre?, timePeriod?, price?){
        this.artist = artist || null;
        this.genre = genre || null;
        this.price = price || null;
        this.timePeriod = timePeriod || null;
    }
}