import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

const Hero = () => {
  const location = useLocation();

  // Scroll to #day-events-section when navigating to /
  useEffect(() => {
    if (location.hash === '#day-events-section') {
      const element = document.getElementById('day-events-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section className="hero" id="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">BSIT Industrial Visit 2025</h1>
        <Link to="/#day-events-section" className="hero-button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;