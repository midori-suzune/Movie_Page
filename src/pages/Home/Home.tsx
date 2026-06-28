import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import styles from './Home.module.css'
import {useMovies} from "../../hooks/useMovies.ts";

export function Home() {

    const {movies , loading , error } = useMovies();

    return (
        <div className={styles.home}>
            <div className={styles.movieShowtime}>
                <button type="button">New Update</button>
                <button type="button">Mon</button>
                <button type="button">Tue</button>
                <button type="button">Wed</button>
                <button type="button">Thu</button>
                <button type="button">Fri</button>
                <button type="button">Sat</button>
                <button type="button">Sun</button>
            </div>

            {/*
                if loading === true and error = ""
            */}
            {loading && (
                <div className={styles.statusMessage} role="status" aria-live="polite">
                    <span className={styles.loadingSpinner} aria-hidden="true"/>
                    <span>Loading movies...</span>
                </div>
            )}

            {/*
                loading === false and error != null
            */}
            {!loading && error && (
                <p className={`${styles.statusMessage} ${styles.errorMessage}`} role="alert">
                    {error}
                </p>
            )}

            {/*
                loading === false and error === null
            */}
            {!loading && !error && (
                <div className={styles.moviesGrid}>
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            )}
        </div>
    )

}
