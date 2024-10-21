// MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = [


   
    
    {
        image:    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame

    },
    {
        image:    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix

      },
      {
        image:    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix

      },
      {
        image:    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
      },
      {
        image:    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
      },
    
  ];

  return (
    <div className="movie-container">
      {movies.map((movie, index) => (
        <MovieCard 
          key={index}
          title={movie.title} 
          image={movie.image} 
          description={movie.description} 
        />
      ))}
    </div>
  );
};

export default MovieList;
