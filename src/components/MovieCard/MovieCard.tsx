

export function MovieCard( {movie } ){

    function onFavouriteClick(){
        alert("Favourite clicked");
    }

    return (
        <div className="movie-card">
            <div className="moive-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavouriteClick}>(｡♥‿♥｡)</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}