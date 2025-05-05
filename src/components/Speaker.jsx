import React from 'react';

// Import the images directly
import S1 from '../assets/speakers/S1.jpg';
import S2 from '../assets/speakers/S2.jpg';
import S3 from '../assets/speakers/S3.jpg';
import S4 from '../assets/speakers/S4.jpg';
import S5 from '../assets/speakers/S5.jpg';
import S6 from '../assets/speakers/S6.jpg';

const speakers = [
  {
    name: 'Mr. Adrian Francisco A. Saldana',
    role: 'LIGHT RAIL TRANSPORTATION TRANSIT AUTHORITY - LINE 2',
    bio: 'Mr. Adrian Saldana is an expert in urban transportation systems. He delivered a presentation on the LRT Line 2, explaining its train operations, components, maintenance, and control room functions. He emphasized the importance of efficient monitoring and safety in urban transit operations.',
    image: S1, // Use the imported image variable
  },
  {
    name: 'Engr. Jerome Saddi jr.',
    role: 'VESSEL TRAFFIC MANAGMENT SYSTEM',
    bio: 'Engr. Jerome gave an insightful presentation at the VTMS facility, explaining how real-time data and radar systems monitor and control maritime traffic to ensure safe navigation. His clear delivery highlighted the key role of technology in maritime operations.',
    image: S2,
  },  
  {
    name: 'Kuya Reynan',
    role: 'DJM TOUR GUIDE',
    bio: 'Our knowledgeable and friendly tour guide throughout the 7-day journey, Kuya Reynán shared insightful stories and historical context, making each stop more engaging. His deep understanding of the locations, coupled with his approachable nature, made the tour both educational and enjoyable.',
    image: S5,
  },
 
  {
    name: 'Mr. Joseph Eligio',
    role: 'METROPOLITAN MANILA DEVELOPMENT AUTHORITY ',
    bio: 'Mr. Joseph from MMDA discusses urban mobility and traffic management, highlighting Manila’s transportation systems.',
    image: S6,
  },

];

const Speakers = () => {
  return (
    <section className="speakers" id="speakers-section">
      <div className="speakers-content">
        <h2 className="speakers-title">Meet Our Speakers</h2>
        <p className="speakers-subtitle">Learn from experts guiding our Industrial Visit across Manila and Baguio.</p>
        <div className="speaker-list">
          {speakers.map((speaker, index) => (
            <div key={index} className="speaker-card">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="speaker-image"
                onError={(e) => { e.target.src = '/fallback-image.jpg'; }} // Optional: fallback image if not found
              />
              <div className="speaker-content">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-role">{speaker.role}</p>
                <p className="speaker-bio">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
