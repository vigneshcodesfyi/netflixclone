
import React from 'react';
import './Header.css'; 
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Netflix Logo" />
      </div>
      <div className="header-right">
        <div className="header-language-selector">
          <select>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
          </select>
        </div>
        <div className="header-signin">
          <button className="signin-button">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
