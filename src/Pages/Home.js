import React, { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import CardLists from "../Components/CardLists";
import Footer from "../Components/Footer";
// import MovieDetails from "../Pages/MovieDetails";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]); // Store initial movies here

  useEffect(() => {
    // Perform the initial fetch of movies on page load here
    // Set the fetched movies into setInitialMovies
    const fetchData = async () => {
      // Fetch your initial movie list and set it to setInitialMovies
      // For example:
      const apiKey = "8b6e37cfbe4ef31a23e07a928d019469";
      const page = 1; // Replace with the desired page number
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&language=en-US&page=${page}`;

      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setInitialMovies(data.results);
        console.log(initialMovies);
      } catch (error) {
        console.error("Error fetching initial movie list:", error);
      }
    };

    fetchData(); // Fetch initial movies on page load
  }, []); // Empty dependency array ensures this effect runs only once on page load

  const onSearch = async (query) => {
    console.log("Searching for:", query);
    setLoading(true);
    const apiKey = "8b6e37cfbe4ef31a23e07a928d019469";
    const page = 1; // Replace with the desired page number

    // Construct the URL for the API request
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;

    try {
      // Make the fetch request to the API
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Parse the JSON response
      const data = await response.json();

      // Handle the data (movie search results) here
      console.log("Movie search results:", data.results);

      // Update state with search results and set showSearchResults to true
      setSearchResults(data.results);
      setShowSearchResults(true);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header onSearch={onSearch} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {showSearchResults ? (
            // Display search results as a list
            <div>
              {searchResults.map((movie) => (
                <div key={movie.id}>
                  <h2>{movie.title}</h2>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <p>Release Date: {movie.release_date}</p>
                </div>
              ))}
            </div>
          ) : (
            // Display initial movies using the CardLists component
            <CardLists movies={initialMovies} />
          )}
        </div>
      )}
      <Footer />
      {/* <MovieDeets />
      <AboutMovie /> */}
    </div>
  );
};

export default Home;
