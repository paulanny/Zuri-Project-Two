import React from 'react';
import Card from './Card';
import Poster from '../Assets/movieposter.png';
import classes from './cardLists.module.css';
import Arrow from '../Assets/Arrow.png';

const CardLists = () => {
  // Sample movie data
  const movies = [
    {
      title: 'Movie 1',
      releaseDate: '2023-09-15',
      posterUrl: Poster,
    },
    {
      title: 'Movie 2',
      releaseDate: '2023-09-20',
      posterUrl: Poster,
    },

    {
      title: 'Movie 2',
      releaseDate: '2023-09-20',
      posterUrl: Poster,
    },

    {
      title: 'Movie 2',
      releaseDate: '2023-09-20',
      posterUrl: Poster,
    },
    // Add more movie objects as needed
  ];

  return (
    <div className={classes.ListCard}>
      <div className={classes.featuretxts}>
        <h2>Featured Movie</h2>
        <div className={classes.seendicon}>
          <a>See More</a>
          <img src={Arrow} alt="arrowIcon" />
        </div>
      </div>
      <div className={classes.movieList}>
        {movies.map((movie, index) => (
          <Card key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default CardLists;
