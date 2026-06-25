import {getMovies, searchMovies} from "../services/movieService.ts";
import {useEffect, useState} from "react";
import type {Movie} from "../types/movie.ts";

/**
 *  - @useMovies - Manage :
 *      - movie state
 *      - error state
 *      - loading state
 *  - Do :
 *      - fetch movie api from @getMovies
 *
 *  - @searchMovieByTitle
 *      - allow search query  from @searchMovies
 */
export function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

// load : to noice whether state of data  is loaded or not
// true : calling api
// false : load end up , irrespective of success or failure

   useEffect(() => {
       async function loadMovies(){
           setLoading(true);
           setError("");
           try{
               const response = await getMovies();
               console.log(response);
               setMovies(response);
           }catch{
               setError("Could not load movies");
           }finally {
               setLoading(false);
           }
       }
       void loadMovies();
   }, [])


   async function searchMovieByTitle( title : string) {
        setLoading(true);
        setError("");
        try{
            const query = title.trim().toLowerCase();
            const result = query ? await searchMovies(query) : await getMovies()
            setMovies(result);
        }catch{
            setError("Could not load movies");
        }finally {
            setLoading(false);
        }
    }

    return {movies, loading ,error , searchMovieByTitle};

}
