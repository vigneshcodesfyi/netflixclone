import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">Movie Title</h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">
          This is a short description of the movie. It will be catchy and
          engaging.
        </p>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
}

export default Banner;
