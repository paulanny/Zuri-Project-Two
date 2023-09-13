import React from "react";
import MovieDeets from "../Components/MovieDeets";

function MovieDetails({ title, releaseDate, runtime, overview, posterPath }) {
  return (
    <div>
        <MovieDeets />
    <div className="movie-details">
      <img
        // className={moviePoster}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        data-testid="movie-poster"
      />
      <h1 data-testid="movie-title">{title}</h1>
      <p data-testid="movie-release-date">Release Date (UTC): {releaseDate}</p>
      <p data-testid="movie-runtime">Runtime (minutes): {runtime}</p>
      <p data-testid="movie-overview">{overview}</p>
    </div>
    </div>
  );
}

export default MovieDetails;
