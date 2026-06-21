const API_KEY: string = "3f863a5a616fb0a12a620258baa6828a";
const API_URL: string = "https://api.themoviedb.org/3";

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