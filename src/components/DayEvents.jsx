
import React from 'react';
import { Link } from 'react-router-dom';
import BG1 from '../assets/BG2.jpg';
import BG2 from '../assets/D2/D2p.jpg';
import BG3 from '../assets/D3/D3i.jpg';
import BG4 from '../assets/D4/D4f.jpg';
import BG5 from '../assets/D5/D5.jpg';
import BG6 from '../assets/D6/D6a.jpg';
import BG7 from '../assets/D7/D7a.jpg';

const events = [
  {
    id: 1,
    title: 'Day 1:A Journey Through Manila',
    image: BG1,
    location: 'Intramuros, Fort Santiago, Rizal Park, Manila Cathedral, San Agustin Church, Mall of Asia',
    date: 'April 7, 2025',
  },
  {
    id: 2,
    title: 'Visiting the Vessel traffic Managment System, SBECC',
    image: BG2,
    location: 'Subic Bay, Olongapo',
    date: 'April 8, 2025',
  },
  {
    id: 3,
    title: 'Museum Visit',
    image: BG3,
    location: 'National Museum of Natural History, and Museo ni Manuel Quezon',
    date: 'April 9, 2025',
  },
  {
    id: 4,
    title: 'Day 4:Discovering Bangko Sentral & HYTEC Power Inc."',
    image: BG4,
    location: 'Bangko Sentral & HYTECH Power Inc.',
    date: 'April 10, 2025',
  },
  {
    id: 5,
    title: 'Day 5: Navigating Manila',
    image: BG5,
    location: 'LRT2 and MMDA',
    date: 'April 11, 2025',
  },
  {
    id: 6,
    title: 'Day 6: Exploring Baguio',
    image: BG6,
    location: 'PMA, Strawberry Farm, Bell Church, Mines View Park & The Mansion',
    date: 'April 12, 2025',
  },
  {
    id: 7,
    title: 'Day 7: Exploring Baguio D-2',
    image: BG7,
    location: 'Baguio Public Market, Burnham Park',
    date: 'April 13, 2025',
  },
];

const DayEvents = () => {
  return (
    <section className="day-events" id="day-events-section">
      <div className="day-events-content">
        <h2 className="day-events-title">Tour Highlights</h2>
        <p className="day-events-subtitle">Discover exciting events happening from  April 7-10, 2025!</p>
        <div className="event-list">
          {events.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id} className="event-card-link">
              <div className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-detail"><span className="event-label">Location:</span> {event.location}</p>
                  <p className="event-detail"><span className="event-label">Date:</span> {event.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayEvents;
