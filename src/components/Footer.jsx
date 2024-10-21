
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-email-container">
        <p className="footer-title">Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="footer-email-input">
          <input type="email" placeholder="Email Address" className="email-input" />
          <button className="get-started-button">Get Started</button>
        </div>
      </div>

      <div className="footer-questions">
        <p>Questions? Call 000-800-919-1694</p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <p>FAQ</p>
          <p>Help Centre</p>
          <p>Account</p>
          <p>Media Centre</p>
        </div>
        <div className="footer-column">
          <p>Investor Relations</p>
          <p>Jobs</p>
          <p>Ways to Watch</p>
          <p>Terms of Use</p>
        </div>
        <div className="footer-column">
          <p>Privacy</p>
          <p>Cookie Preferences</p>
          <p>Corporate Information</p>
          <p>Contact Us</p>
        </div>
        <div className="footer-column">
          <p>Speed Test</p>
          <p>Legal Notices</p>
          <p>Only on Netflix</p>
        </div>
      </div>

      <div className="footer-language">
      <div className="header-language-selector">

      <select>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="ta">Tamil</option>
            {/* Add more languages as needed */}
          </select>
          </div>

        <span>Netflix India</span>
      </div>
    </footer>
  );
};

export default Footer;
