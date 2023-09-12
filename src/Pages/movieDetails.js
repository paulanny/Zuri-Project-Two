import React from 'react';

function MovieDetails({ title, releaseDate, runtime, overview }) {
    return (
        <div className="movie-details">
            <h1 data-testid="movie-title">{title}</h1>
            <p data-testid="movie-release-date">Release Date (UTC): {releaseDate}</p>
            <p data-testid="movie-runtime">Runtime (minutes): {runtime}</p>
            <p data-testid="movie-overview">{overview}</p>
        </div>
    );
}

export default MovieDetails;
