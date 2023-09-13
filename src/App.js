import React from "react";
import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, useParams } 
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

  const App = () => {
    // Define state to store movie data
    const [movieDetails, setMovieDetails] = useState(null);
  
    // Function to fetch movie data by ID
    const fetchMovieData = async (id) => {
      try {
        // Make an API request to fetch movie details by ID
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8b6e37cfbe4ef31a23e07a928d019469`)
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        const data = await response.json();
        setMovieDetails(data); // Update the state with movie data
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };
  
    // Use React Router's useParams to get the movie ID from the route
    const { id } = useParams();
    // Fetch movie data when the component mounts or when the ID changes
  useEffect(() => {
    if (id) {
      fetchMovieData(id);
    }
  }, [id]);
  
  return (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movie/:id" element={<MovieDetails />} />
  </Routes>
  );
}

export default App;


//     {movieDetails && <MovieDetails {...movieDetails} />} />