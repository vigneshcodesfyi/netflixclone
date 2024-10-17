import React from "react";
import "./Row.css";

function Row({ title }) {
  const movies = [
    "https://m.media-amazon.com/images/I/51kL8kzYb5L._AC_SY679_.jpg", // Inception
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
    "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg", // Interstellar
    "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg", // Avengers: Endgame
    "https://m.media-amazon.com/images/I/51EG732BV3L._AC_SY679_.jpg", // The Matrix
  ];

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <img key={index} className="row-poster" src={movie} alt="Movie" />
        ))}
      </div>
    </div>
  );
}

export default Row;
