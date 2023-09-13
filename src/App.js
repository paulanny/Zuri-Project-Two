import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieData = async (id) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8b6e37cfbe4ef31a23e07a928d019469`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const data = await response.json();
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  const { id } = useParams();
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
};

export default App;
