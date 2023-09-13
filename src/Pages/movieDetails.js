import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDeets from "../Components/MovieDeets";
import classes from "./MovieDetails.module.css";
import PlayIcon from "../Assets/Play (2).png";
import StarIcon from "../Assets/Star.png";
import ExpandIcon from "../Assets/Expand Arrow.png";
import Tickets from "../Assets/Two Tickets.png";
import Lists from "../Assets/List.png";
import Listss from "../Assets/List (2).png";
import GridPosters from "../Assets/Rectangle 37.png";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const apiKey = "8b6e37cfbe4ef31a23e07a928d019469";
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, release_date, runtime, overview, poster_path } = movieDetails;

  return (
    <div className={classes.sidebarndcontent}>
      <MovieDeets />
      <div className={classes.AboutMovie}>
        <div className={classes.Imgcontainer}>
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            data-testid="movie-poster"
          />
          <div className={classes.overlay}>
            <div className={classes.playelement}>
              <img src={PlayIcon} alt="iconplay" />
            </div>
            <p className={classes.text}>Watch Trailer</p>
          </div>
        </div>
        <div className={classes.allunderposterattr}>
          <div className={classes.hndp}>
            <h1 data-testid="movie-title">{title}</h1>
            <div className={classes.underposterp}>
              <p data-testid="movie-release-date">
                Release Date (UTC): {release_date}
              </p>
              <p data-testid="movie-runtime">Runtime (minutes): {runtime}</p>
              <div className={classes.movbtn}>
                <button>Action</button>
                <button>Drama</button>
              </div>
            </div>
          </div>
          <div className={classes.favourite}>
            <img src={StarIcon} alt="staricon" />
            <p className={classes.favp}>8.5</p>
            <p className={classes.favp2}>|350k</p>
          </div>
        </div>

        <div className={classes.moredeets}>
          <div className={classes.moredeetsp}>
            <p className={classes.firstdeetp} data-testid="movie-overview">
              {overview}
            </p>
            <div className={classes.btnlikediv}>
              <div className={classes.firstdiv}>
                <p>Top rated movie #65</p>
              </div>
              <div className={classes.seconddiv}>
                <p>Awards 9 Nominations</p>
                <img src={ExpandIcon} alt="expicon" />
              </div>
            </div>
          </div>
          <div className={classes.endbtn}>
            <button className={classes.endbtn1}>
              <img src={Tickets} alt="tickets" />
              <p>See Showtimes</p>
            </button>
            <button className={classes.endbtn2}>
              <img src={Lists} alt="tickets" />
              <p>More Watch Options</p>
            </button>
            <div className={classes.gridpost}>
              <img src={GridPosters} alt="gridposters" />
              <div className={classes.enddivv}>
                <img src={Listss} alt="tickets" />
                <p>The Best Movies and Shows in September</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
