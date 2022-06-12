import axios from "axios";
import { GenreModel} from "../models";


const url = 'http://localhost:4000/api/v1/genres'


const getAllGenres= async () : Promise<GenreModel[] | null> =>{
    const response = await axios.get(url);
    return response.data;
}



const genreService = {
    getAllGenres,
}

export default genreService;