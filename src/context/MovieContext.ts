import { createContext , useContext} from 'react';
import type {Movie} from "../types/movie.ts";


// It describes everything the context will provide

export  interface MovieContextValue {
    favorite: Movie[]
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movie: number) => void;
}

// We use undefined because there is no context value until
// a provider wraps the application


export const MovieContext = createContext<MovieContextValue | undefined>(undefined);



export function useMoviesContext() : MovieContextValue{

    // read current value from provider
    const context : MovieContextValue | undefined = useContext(MovieContext);

    if(context === undefined){
        throw new Error('useMoviesContext must be used within useMoviesContext');
    }
    return context;

}








