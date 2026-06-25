import {MovieContext, type MovieContextValue} from "../context/MovieContext.ts";
import {useContext} from "react";


export function useMoviesContext() : MovieContextValue{

    // read current value from provider
    const context : MovieContextValue | undefined = useContext(MovieContext);

    if(context === undefined){
        throw new Error('useMoviesContext must be used within useMoviesContext');
    }
    return context;

}