import { createContext} from 'react';
import type {Movie} from "../types/movie.ts";


// It describes everything the context will provide

export interface MovieContextValue {
    favorite: Movie[]
    addFavorite: (movie: Movie) => void;
    removeFavorite: (movie: number) => void;
}

// We use undefined because there is no context value until
// a provider wraps the application


export const MovieContext = createContext<MovieContextValue | undefined>(undefined);












