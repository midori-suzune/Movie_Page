import type {Movie} from "../../types/movie.ts";
import styles from './MovieCard.module.css'

export function MovieCard( { movie } : { movie: Movie }  ) {

    function onFavouriteClick(){
        alert("Favourite clicked");
    }
    return (
        <div className={styles.movieCard}>
            <div className={styles.moviePoster}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className={styles.movieOverlay}>
                    <button
                        type="button"
                        className={styles.favoriteBtn}
                        onClick={onFavouriteClick}
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
