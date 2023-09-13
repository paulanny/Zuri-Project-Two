import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";
import Poster from "../Assets/movieposter.png";
import classes from "./cardLists.module.css";
import Arrow from "../Assets/Arrow.png";

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

    // Make the API request
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Process the API response data (in this example, we'll log it)
        console.log(data);
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
  

  // const movies = [
  //   {
  //     title: 'Movie 1',
  //     releaseDate: '2023-09-15',
  //     posterUrl: Poster,
  //   },
  //   {
  //     title: 'Movie 2',
  //     releaseDate: '2023-09-20',
  //     posterUrl: Poster,
  //   },

  //   {
  //     title: 'Movie 2',
  //     releaseDate: '2023-09-20',
  //     posterUrl: Poster,
  //   },

  //   {
  //     title: 'Movie 2',
  //     releaseDate: '2023-09-20',
  //     posterUrl: Poster,
  //   },
  // ];
  // const top10Movies = movies.slice(0, 10);

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
          {movies.splice(0, 10).map((movie) => (
            <Card
              key={movie.id}
              // movie={movie}
              title={movie.title}
              genreIds={movie.genre_ids}
              releaseDate={movie.release_date}
              overview={movie.overview}
              posterPath={movie.poster_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardLists;

// function MovieComponent() {
// // The empty dependency array ensures this effect runs only once

//   return (
//     <div>
//       {/* Your component JSX */}
//     </div>
//   );
// }

// export default MovieComponent;
