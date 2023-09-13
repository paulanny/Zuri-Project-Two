import { Link } from "react-router-dom"
import Imdb from '../Assets/imdb.png';
import Tomatoes from '../Assets/tomato.png';
import classes from './Card.module.css';

const Card = ({ id, title, genreIds, releaseDate, overview, posterPath }) => {
  return (
    <div className={classes.card} data-testid="movie-card">
      <Link to={`/movie/${id}`} >
      <img
      className={classes.moviePoster}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title}
        data-testid="movie-poster"
      />
      <div className="movie-details">
        <p className={classes.movieReleaseDate} data-testid="movie-release-date">
        Release Date: {releaseDate}
        </p>
        <h2 className={classes.movieTitle} data-testid="movie-title">
          {title}
        </h2>
        <div className={classes.rating}>
          <div className={classes.imdbim}>
            <img src={Imdb} alt="imdbimge" />
            <p>86.0/100</p>
          </div>
          <div className={classes.imdbim}>
            <img src={Tomatoes} alt="imdbimge" />
            <p>97%</p>
          </div>
        </div>
        <p className={classes.movieReleaseDate} data-testid="movie-release-date">
        Genre: {genreIds.join(', ')}
        </p>
      </div>
      </Link>
    </div>
  );
};

export default Card;
