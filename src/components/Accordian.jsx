// src/Accordion.js

import React, { useState } from 'react';
import './Accordian.css'; // Import the CSS file

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onToggle}>
        {title} <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'What is Netflix?',
      content: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      title: 'How much does Netflix cost?',
      content: 'Watch Netflix on your smartphone, tablet, smart TV, laptop, or streaming device, all for one low monthly price.',
    },
    {
      title: 'Where can I watch?',
      content: 'Watch anywhere, anytime, on any device that can connect to the internet.',
    },
    {
      title: 'How do I cancel?',
      content: 'Netflix is flexible. There are no pesky contracts to follow; you can cancel at any time.',
    },
    {
      title: 'What can I watch on Netflix?',
      content: 'Netflix offers a wide variety of genres, including action, drama, comedy, and more!',
    },
  ];

  return (
    <div className="accordion">
              <h1>Frequently Asked Questions</h1>

      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
