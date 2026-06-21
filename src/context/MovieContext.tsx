import {createContext, useState, useContext, useEffect, type ReactNode} from "react";

const MovieContext = createContext();

export function useMovieContext() {
    useContext(MovieContext);
}
export function useMovieProvider( {children }: ReactNode) {
    const [favorites, setFavorites] = useState([]);
    useEffect( () => {
        const storedFavorites = localStorage.getItem("favorites");
        if(storedFavorites) setFavorites(JSON.parse(storedFavorites));
    });
    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}