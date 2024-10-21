import React from 'react';
import ReasonsToJoin from './ReasonsToJoin';

const JoinUsSection = () => {
  const reasons = [
    {
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
    },
    {
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch."
    },
    {
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
    }
  ];

  return (
    <div className="join-us-section">
      <ReasonsToJoin reasons={reasons} />
    </div>
  );
};

export default JoinUsSection;
