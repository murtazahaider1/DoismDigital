import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="Portfolio" id="portfolio">
      <h2>Our Work</h2>
      <div className="Portfolio-gallery">
        <img src="../portfolio1.jpg" alt="Project 1" />
        <img src="../portfolio2.jpg" alt="Project 2" />
        <img src="../portfolio3.jpeg" alt="Project 3" />
        <img src="../portfolio4.jpeg" alt="Project 4" />
      </div>
    </section>
  );
}

export default Portfolio;
