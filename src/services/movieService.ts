import {API_URL} from "../constants/api.ts";

const API_KEY: string = import.meta.env.VITE_API_KEY;

export const getMovies = async () => {
    const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`, {});

    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();
    return data.results;
}


// encodeURIComponent : Spider Man => Spider%20Man
export async function searchMovies(title : string){
    const response = await fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`, {})
    const data = await response.json();
    return data.results;
}
