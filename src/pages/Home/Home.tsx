import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import {type ChangeEvent, useEffect, useState} from "react";
import {getMovies} from "../../services/movieService.ts";
import styles from './Home.module.css'
import type {Movie} from "../../types/movie.ts";
import {searchMovies} from "../../services/movieService.ts";
import * as React from "react";

export function Home() {
    const [searchQuery, setSearchQuery] = useState<string>("");

    const [movies, setMovies] = useState<Movie[]>([]);
    const [error, setError] = useState("");

    // load : to noice whether state of data  is loaded or not
    // true : calling api
    // false : load end up , irrespective of success or failure

    const [loading, setLoading] = useState(true);

    useEffect((): void => {
        async function loadMovies(): Promise<void> {
            try {
                const movies = await getMovies();
                setMovies(movies);
            } catch {
                setError("Could not load movies");
            } finally {
                setLoading(false);
            }
        }

        void loadMovies();
    }, [])

    function setValueInput(event: ChangeEvent<HTMLInputElement>): void {
        setSearchQuery(event.target.value);
    }
    async function handleSearch( event : React.SubmitEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        setLoading(true);
        setError("");
        try{
            const query = searchQuery.trim().toLowerCase();
            const result = query ? await searchMovies(query) : await getMovies()
            setMovies(result);
        }catch{
            setError("Could not load movies");
        }finally {
            setLoading(false);
        }
    }

    return (
        <div className={styles.home}>
            <form className={styles.searchForm} onSubmit={handleSearch}>
                <input type={"text"} value={searchQuery} placeholder={"Search for movies...."}
                       className={styles.searchInput}
                       onChange={setValueInput}
                />
                <button type="submit" className={styles.searchButton}>Search</button>
            </form>
            {
                loading && <p>Loading Movies....</p>
            }
            {
                !loading && error !== "" && <p>{error}</p>
            }
            <div className={styles.moviesGrid}>
                {movies.map(movie => {
                    return (
                        searchQuery === "" ?  (<MovieCard movie={movie} key={movie.id}></MovieCard>) :
                        <MovieCard movie={movie} key={movie.id}></MovieCard>
                    )
                })}
            </div>
        </div>
    )
}
