import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapPin, FaCalendarAlt } from 'react-icons/fa';
import BG1 from '../assets/BG2.jpg';
import BG2 from '../assets/D2/D2p.jpg';
import BG3 from '../assets/D3/D3i.jpg';
import BG4 from '../assets/D4/D4f.jpg';
import BG5 from '../assets/D5/D5.jpg';
import BG6 from '../assets/D6/D6a.jpg';
import BG7 from '../assets/D7/D7a.jpg';
import '../index.css';

const events = [
  {
    id: 1,
    title: 'Day 1: Fort Santiago, Rizal Park, Manila Cathedral, MOA',
    image: BG1,
    details: [
      { label: 'Location', value: 'Intramuros, Pasay City' },
      { label: 'Date', value: 'April 7, 2025' },
    ],
  },
  {
    id: 2,
    title: 'Day 2: Vessel Traffic Management System and SBECC',
    image: BG2,
    details: [
      { label: 'Location', value: 'Subic Bay, Olongapo' },
      { label: 'Date', value: 'April 8, 2025' },
    ],
  },
  {
    id: 3,
    title: 'National Museum of Natural History & Museo ni Manuel Quezon',
    image: BG3,
    details: [
      { label: 'Location', value: 'Ermita - Diliman, Quezon City,' },
      { label: 'Date', value: 'April 9, 2025' },
    ],
  },
  {
    id: 4,
    title: 'Day 4: Bangko Sentral ng Pilipinas & HYTEC Power Inc.',
    image: BG4,
    details: [
      { label: 'Location', value: ' Novaliches, Quezon City - 1104 East Ave, Quezon City' },
      { label: 'Date', value: 'April 10, 2025' },
    ],
  },
  {
    id: 5,
    title: 'Day 5: LRT LINE-2 & MMDA ',
    image: BG5,
    details: [
      { label: 'Location', value: 'Santolan, Pasig City - Ugong, Pasig, Metro Manila' },
      { label: 'Date', value: 'April 11, 2025' },
    ],
  },
  {
    id: 6,
    title: 'Day 6: Bell Church- Strawberry Farm - The Mansion - Mines View Park - PMA',
    image: BG6,
    details: [
      { label: 'Location', value: 'Baguio City' },
      { label: 'Date', value: 'April 12, 2025' },
    ],
  },
  {
    id: 7,
    title: 'Day 7: Baguio Public Market - Burnham Park',
    image: BG7,
    details: [
      { label: 'Location', value: 'Baguio City' },
      { label: 'Date', value: 'April 13, 2025' },
    ],
  },
];

const DayEvents = () => {
  const iconMap = {
    Location: <FaMapPin className="event-detail-icon" />,
    Date: <FaCalendarAlt className="event-detail-icon" />,
  };

  return (
    <section className="day-events" id="day-events-section">
      <div className="day-events-content">
        <h2 className="day-events-title">Tour Highlights</h2>
       
        <div className="event-list">
          {events.map((event) => (
            <Link to={`/event/${event.id}`} key={event.id} className="event-card-link">
              <div className="event-card">
                <img src={event.image} alt={event.title} className="event-image" />
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  {event.details.map((detail, idx) => (
                    <p key={idx} className="event-detail">
                      {iconMap[detail.label] || null}
                      <span className="event-label">{detail.label}:</span> {detail.value}
                    </p>
                  ))}
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