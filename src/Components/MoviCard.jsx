import React from "react";
import { useMovieContext } from "../contexts/MovieContext";
import "../CSS/MovieCard.css";
function MoviCard({ movie }) {
  const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
  const favorite = isFavorite(movie.id);

  function onFavoriteClick(e) {
    console.log(onFavoriteClick)
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
}

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.tite}
        />
        <div className="movie-oerlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MoviCard;
