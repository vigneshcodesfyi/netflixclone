// ReasonsToJoin.js
import React from 'react';
import './ReasonsToJoin.css'; // Import CSS for styling

const ReasonsToJoin = ({ reasons }) => {
  return (
    <div className="reasons-to-join">
      <h2>More Reasons to Join</h2>
      <div className="reasons-container">
        {reasons.map((reason, index) => (
          <div key={index} className="reason-block">
            <h3 className="reason-title">{reason.title}</h3>
            <p className="reason-description">{reason.description}</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ReasonsToJoin;
