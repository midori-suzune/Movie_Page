import {type MovieContextValue, useMoviesContext} from "../../context/MovieContext.ts";
import type {Movie} from "../../types/movie.ts";
import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import styles from "../Home/Home.module.css";

export function Favourite() {
    const favorite: MovieContextValue = useMoviesContext();
    const favoriteList: Movie[] = favorite.favorite;
    return (
        <div className={styles.moviesGrid}>
            {
                favoriteList.map((item: Movie) => {
                    return (
                        <MovieCard movie={item} key={item.id}></MovieCard>
                    )
                })
            }
        </div>
    )
}