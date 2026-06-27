import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import {type ChangeEvent, useState} from "react";
import styles from './Home.module.css'

import * as React from "react";
import {useMovies} from "../../hooks/useMovies.ts";

export function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const {movies, loading ,error , searchMovieByTitle} = useMovies();

    function setValueInput(event: ChangeEvent<HTMLInputElement>): void {
        setSearchQuery(event.target.value);
    }

    async function handleSearch(event : React.SubmitEvent<HTMLFormElement>){
            event.preventDefault();
            await searchMovieByTitle(searchQuery);
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
            <iframe
                src="https://vidsrc.to/embed/movie/1397385"
                width="640"
                height="360"
                allowFullScreen>
            </iframe>
            <div className={styles.moviesGrid}>
                {movies.map(movie => {
                    return (
                        searchQuery === "" ? (<MovieCard movie={movie} key={movie.id}></MovieCard>) :
                            <MovieCard movie={movie} key={movie.id}></MovieCard>
                    )
                })}
            </div>
        </div>
    )

}
