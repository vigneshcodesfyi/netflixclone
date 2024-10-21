
import React from 'react';
import './TrendingSection.css'; 

const TrendingSection = () => {
  return (
    <div className="trending-section">
      <h2 className="trending-title">Trending Now</h2>

      <div className="dropdowns-container">
        <div className="dropdown">
          <select id="region">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>

        <div className="dropdown">
          <select id="content-type">
            <option value="movies">Movies</option>
            <option value="tv">TV Shows</option>
            <option value="films">Films</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TrendingSection;
