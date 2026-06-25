import type {Movie} from "../../types/movie.ts";
import styles from './MovieCard.module.css'
import {type MovieContextValue} from "../../context/MovieContext.ts";
import {useMoviesContext} from "../../hooks/useMovieContext.tsx";
import {IMAGE_URL} from "../../constants/api.ts";


export function MovieCard({movie}: { movie: Movie }) {

    const context: MovieContextValue = useMoviesContext();

    // some : examines each item in an array and return a boolean
    // true : At least one item matches
    // false : No items match
    const idFavorite: boolean = context.favorite.some(
        (item: Movie)  : boolean => {
            return item.id === movie.id
        },
    )

    function onFavoriteClick(): void {
        if (idFavorite) {
            context.removeFavorite(movie.id);
        }else{
            context.addFavorite(movie);
        }
    }

    return (
        <div className={styles.movieCard}>
            <div className={styles.moviePoster}>
                <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title}/>
                <div className={styles.movieOverlay}>
                    <button
                        type="button"
                        className={styles.favoriteBtn}
                        onClick={onFavoriteClick}
                        aria-label={`Add ${movie.title} to favorites`}
                    >
                        ♥
                    </button>
                </div>
            </div>
            <div className={styles.movieInfo}>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}
