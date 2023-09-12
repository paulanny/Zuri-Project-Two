import Imdb from '../Assets/imdb.png';
import Tomatoes from '../Assets/tomato.png';
import classes from './Card.module.css';

const Card = ({ movie }) => {
  return (
    <div className="card" data-testid="movie-card">
      <img
      className={classes.moviePoster}
        src={movie.posterUrl}
        alt={movie.title}
        data-testid="movie-poster"
      />
      <div className="movie-details">
        <p className={classes.movieReleaseDate} data-testid="movie-release-date">
          Release Date: {movie.releaseDate}
        </p>
        <h2 className={classes.movieTitle} data-testid="movie-title">
          {movie.title}
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
          Release Date: {movie.releaseDate}
        </p>
      </div>
    </div>
  );
};

export default Card;
