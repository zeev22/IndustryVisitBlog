import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import Hero from './components/Hero';
import DayEvents from './components/DayEvents';
import EventDetails from './components/EventDetails';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
            <span className="nav-toggle-icon"></span>
          </button>
          <ul className={`nav-list ${isMenuOpen ? 'nav-list--open' : ''}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/#day-events-section"
                className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <DayEvents />
              </>
            }
          />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;