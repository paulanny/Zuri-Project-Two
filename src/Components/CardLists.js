import React, { useEffect, useState } from "react";
import Card from "./Card";
import classes from "./cardLists.module.css";
import Arrow from "../Assets/Arrow.png";
import { Link } from 'react-router-dom';

const CardLists = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "8b6e37cfbe4ef31a23e07a928d019469"; // Replace with your actual API key
    const apiUrl = "https://api.themoviedb.org/3/movie/top_rated";

    // Construct the query parameters, including your API key
    const queryParams = new URLSearchParams({
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: 1,
      sort_by: "popularity.desc",
      api_key: apiKey,
    });

    // Combine the base URL with the query parameters
    const url = `${apiUrl}?${queryParams}`;

    // Make the API request and handle the response
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Update the 'movies' state with the fetched data
        setMovies(data.results);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error("Fetch error:", error);
      });
  }, []);

  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className={classes.ListCard}>
      <div className={classes.featuretxts}>
        <h2>Featured Movie</h2>
        <div className={classes.seendicon}>
          <a>See More</a>
          <img src={Arrow} alt="arrowIcon" />
        </div>
      </div>
      <div className={classes.Moviecontainer}>
        <div className={classes.movieList}>
          {movies.slice(0, 10).map((movie) => (
            <Link to={`/movie/${movie.id}`} key={movie.id}>
              <Card
                title={movie.title}
                genreIds={movie.genre_ids}
                releaseDate={movie.release_date}
                overview={movie.overview}
                posterPath={movie.poster_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLists;
