// src/Main.js

import React from 'react';
import './Main.css'; // Import the CSS file if you have one

const Main = () => {
  return (
    <div className="main-container">
      <h1 className="main-title">Unlimited movies,<br />TV shows and<br />more</h1>
      <p className="main-subtitle">Starts at ₹149. Cancel at any time.</p>
      <br>
      </br>
      <p className="main-subtitle">      Ready to watch? Enter your email to create or restart your membership.
      </p>


      <div className="email-container">
        <input type="email" placeholder="Email Address" className="email-input" />
        <button className="get-started-button">Get Started</button>
      </div>
    </div>
  );
};

export default Main;
