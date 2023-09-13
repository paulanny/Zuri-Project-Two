import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import CardLists from "../Components/CardLists";
import Footer from "../Components/Footer";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "8b6e37cfbe4ef31a23e07a928d019469";
      const page = 1;
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

    fetchData();
  }, []);

  const onSearch = async (query) => {
    console.log("Searching for:", query);
    setLoading(true);
    const apiKey = "8b6e37cfbe4ef31a23e07a928d019469";
    const page = 1;

    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log("Movie search results:", data.results);

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
            <CardLists movies={initialMovies} />
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Home;
