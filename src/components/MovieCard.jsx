// MovieCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ title, image, description }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-image" />
      <h3 className="movie-title">{title}</h3>
      <p className="movie-description">{description}</p>
    </div>
  );
};

// Prop types for validation
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieCard;
