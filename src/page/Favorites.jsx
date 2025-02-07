import React from "react";
import "../CSS/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MoviCard from "../Components/MoviCard";

function Favorites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorits</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MoviCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorites Movies Yet</h2>
      <p>
        Start hiding your movies to your favorites and they will appear here
      </p>
    </div>
  );
}

export default Favorites;
