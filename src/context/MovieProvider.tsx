import {type ReactNode, useState} from "react";
import type {Movie} from "../types/movie.ts";
import {MovieContext, type MovieContextValue} from "./MovieContext.ts";

export function MovieProvider({children}: { children: ReactNode }) {

    const [favorite, setFavorite] = useState<Movie[]>([]);

    function addFavorite(movie: Movie) {
        /*
              currentFav = ["A" , "B"]
              movie = "C"
              callback return new array : ["A" , "B" , "C" ]
         */
        setFavorite( (currentFav : Movie[]) : Movie[] => {
            return [...currentFav, movie];
        })
    }

    function removeFavorite(movieId: number) {
        setFavorite( (currentFav) => {
            return currentFav.filter( (movie : Movie) : boolean=> {
                return movie.id !== movieId;
            })
        })
    }

    // create object
    const contextValue : MovieContextValue = {
        favorite,
        addFavorite,
        removeFavorite,
    }

    return (
        <MovieContext.Provider value={contextValue}>
            { children }
        </MovieContext.Provider>
    )
}