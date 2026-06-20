import {MovieCard} from "../../components/MovieCard/MovieCard.tsx";
import {type ChangeEvent, useState} from "react";

export function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "John Wick", releaseDate: "2020"},
        {id: 2, title: "Terminator", releaseDate: "1999"},
        {id: 3, title: "The Matrix ", releaseDate: "1998"},
    ]
    const handleSearch = (event) => {
        event.preventDefault();
        // alert(searchQuery)
    }
    const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type={"text"} value={searchQuery} placeholder={"Search for movies...."}
                       className={"search-input"}
                       onChange={handleChangeSearch}
                />
                <button type="submit" className={"search-button"}>Search</button>
            </form>

            <div className="movies-grid">
                {movies.map(movie => {
                  return movie.title.toLocaleLowerCase().startsWith(searchQuery.toLocaleLowerCase()) &&
                       <MovieCard movie={movie} key={movie.id}/>
                })}
            </div>
        </div>
    )
}