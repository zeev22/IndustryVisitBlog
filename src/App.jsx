import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero';
import DayEvents from './components/DayEvents';
import EventDetails from './components/EventDetails';
import Speakers from './components/Speaker';
import Insights from './components/Insights';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const showNav = !location.pathname.startsWith('/event/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (sectionId) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className={showNav ? 'App' : ''}>
      {showNav && (
        <nav className="nav">
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
            <span className="nav-toggle-icon"></span>
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'nav-list--open' : ''}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleScroll('#hero-section'); }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleScroll('#day-events-section'); }}
              >
                Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleScroll('#speakers-section'); }}
              >
                Speakers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={(e) => { e.preventDefault(); handleScroll('#insights-section'); }}
              >
                Insights
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      <ErrorBoundary>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <DayEvents />
                <Speakers />
                <Insights />
              </>
            }
          />
          <Route
            path="/event/:id"
            element={
              <ErrorBoundary>
                <EventDetails />
              </ErrorBoundary>
            }
          />
          <Route
            path="*"
            element={
              <section className="event-details">
                <div className="event-details-content">
                  <h2 className="event-details-title">Page Not Found</h2>
                  <p className="event-details-subtitle">Sorry, the page you're looking for doesn't exist.</p>
                  <NavLink to="/" className="event-details-button">
                    Back to Home
                  </NavLink>
                </div>
              </section>
            }
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}