import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { FaMapPin, FaCalendarAlt, FaInfoCircle } from 'react-icons/fa';
import D1a from '../assets/D1/D1a.jpg';
import D1b from '../assets/D1/D1b.jpg';
import D1d from '../assets/D1/D1d.jpg';
import D1e from '../assets/D1/D1e.jpg';
import D1f from '../assets/D1/D1f.jpg';
import D1g from '../assets/D1/D1g.jpg';
import D1i from '../assets/D1/D1i.jpg';
import D1j from '../assets/D1/D1j.jpg';
import D1k from '../assets/D1/D1k.jpg';
import D1l from '../assets/D1/D1l.jpg';
import D1m from '../assets/D1/D1m.jpg';
import D1n from '../assets/D1/D1n.jpg';
import D1o from '../assets/D1/D1o.jpg';
import D1p from '../assets/D1/D1p.jpg';
import D1q from '../assets/D1/D1q.jpg';
import D1t from '../assets/D1/D1t.jpg';
import D1u from '../assets/D1/D1u.jpg';
import D1v from '../assets/D1/D1v.jpg';
import D1w from '../assets/D1/D1w.jpg';
import D1x from '../assets/D1/D1x.jpg';
import D2a from '../assets/D2/D2a.jpg';
import D2b from '../assets/D2/D2b.jpg';
import D2c from '../assets/D2/D2c.jpg';
import D2d from '../assets/D2/D2d.jpg';
import D2e from '../assets/D2/D2e.jpg';
import D2f from '../assets/D2/D2f.jpg';
import D2g from '../assets/D2/D2g.jpg';
import D2h from '../assets/D2/D2h.jpg';
import D2i from '../assets/D2/D2i.jpg';
import D2j from '../assets/D2/D2j.jpg';
import D2k from '../assets/D2/D2k.jpg';
import D2l from '../assets/D2/D2l.jpg';
import D2m from '../assets/D2/D2m.jpg';
import D2o from '../assets/D2/D2o.jpg';
import D2p from '../assets/D2/D2p.jpg';
import D2q from '../assets/D2/D2q.jpg';
import D2r from '../assets/D2/D2r.jpg';
import D2s from '../assets/D2/D2s.jpg';
import D2t from '../assets/D2/D2t.jpg';
import D3a from '../assets/D3/D3a.jpg';
import D3b from '../assets/D3/D3b.jpg';
import D3c from '../assets/D3/D3c.jpg';
import D3d from '../assets/D3/D3d.jpg';
import D3e from '../assets/D3/D3e.jpg';
import D3f from '../assets/D3/D3f.jpg';
import D3g from '../assets/D3/D3g.jpg';
import D3h from '../assets/D3/D3h.jpg';
import D3i from '../assets/D3/D3i.jpg';
import D3j from '../assets/D3/D3j.jpg';
import D3k from '../assets/D3/D3k.jpg';
import D3l from '../assets/D3/D3l.jpg';
import D3m from '../assets/D3/D3m.jpg';
import D3n from '../assets/D3/D3n.jpg';
import D3o from '../assets/D3/D3o.jpg';
import D3p from '../assets/D3/D3p.jpg';
import D3q from '../assets/D3/D3q.jpg';
import D3r from '../assets/D3/D3r.jpg';
import D3s from '../assets/D3/D3s.jpg';
import D3t from '../assets/D3/D3t.jpg';
import D3u from '../assets/D3/D3u.jpg';
import D3v from '../assets/D3/D3v.jpg';
import D3w from '../assets/D3/D3w.jpg';
import D3x from '../assets/D3/D3x.jpg';
import D3y from '../assets/D3/D3y.jpg';
import D3z from '../assets/D3/D3z.jpg';
import D4a from '../assets/D4/D4a.jpg';
import D4b from '../assets/D4/D4b.jpg';
import D4c from '../assets/D4/D4c.jpg';
import D4d from '../assets/D4/D4d.jpg';
import D4e from '../assets/D4/D4e.jpg';
import D4f from '../assets/D4/D4f.jpg';
import D4g from '../assets/D4/D4g.jpg';
import D4h from '../assets/D4/D4h.jpg';
import D4i from '../assets/D4/D4i.jpg';
import D4j from '../assets/D4/D4j.jpg';
import D4k from '../assets/D4/D4k.jpg';
import D4l from '../assets/D4/D4l.jpg';
import D5a from '../assets/D5/D5a.jpg';
import D5b from '../assets/D5/D5b.jpg';
import D5c from '../assets/D5/D5c.jpg';
import D5d from '../assets/D5/D5d.jpg';
import D5e from '../assets/D5/D5e.jpg';
import D5f from '../assets/D5/D5f.jpg';
import D5g from '../assets/D5/D5g.jpg';
import D5h from '../assets/D5/D5h.jpg';
import D5i from '../assets/D5/D5i.jpg';
import D5j from '../assets/D5/D5j.jpg';
import D5k from '../assets/D5/D5k.jpg';
import D5l from '../assets/D5/D5l.jpg';
import D5m from '../assets/D5/D5m.jpg';
import D5n from '../assets/D5/D5n.jpg';
import D5o from '../assets/D5/D5o.jpg';
import D5p from '../assets/D5/D5p.jpg';
import D5q from '../assets/D5/D5q.jpg';
import D5r from '../assets/D5/D5r.jpg';
import D6a from '../assets/D6/D6a.jpg';
import D6b from '../assets/D6/D6b.jpg';
import D6c from '../assets/D6/D6c.jpg';
import D6d from '../assets/D6/D6d.jpg';
import D6e from '../assets/D6/D6e.jpg';
import D6f from '../assets/D6/D6f.jpg';
import D6g from '../assets/D6/D6g.jpg';
import D6h from '../assets/D6/D6h.jpg';
import D6i from '../assets/D6/D6i.jpg';
import D6j from '../assets/D6/D6j.jpg';
import D6k from '../assets/D6/D6k.jpg';
import D6l from '../assets/D6/D6l.jpg';
import D6m from '../assets/D6/D6m.jpg';
import D6n from '../assets/D6/D6n.jpg';
import D6o from '../assets/D6/D6o.jpg';
import D6p from '../assets/D6/D6p.jpg';
import D6q from '../assets/D6/D6q.jpg';
import D6r from '../assets/D6/D6r.jpg';
import D6s from '../assets/D6/D6s.jpg';
import D7a from '../assets/D7/D7a.jpg';
import D7b from '../assets/D7/D7b.jpg';
import D7c from '../assets/D7/D7c.jpg';
import D7d from '../assets/D7/D7d.jpg';
import D7e from '../assets/D7/D7e.jpg';
import D7f from '../assets/D7/D7f.jpg';
import '../index.css';

// Function to generate image arrays based on day
const generateImageArrays = (day) => {
  const images = {
    1: [D1a, D1b, D1d, D1e, D1f, D1g, D1i, D1j, D1k, D1l, D1m, D1n, D1o, D1p, D1q, D1t, D1u, D1v, D1w, D1x],
    2: [D2a, D2b, D2c, D2d, D2e, D2f, D2g, D2h, D2i, D2j, D2k, D2l, D2m, D2o, D2p, D2q, D2r, D2s, D2t],
    3: [D3a, D3b, D3c, D3d, D3e, D3f, D3g, D3h, D3i, D3j, D3k, D3l, D3m, D3n, D3o, D3p, D3q, D3r, D3s, D3t, D3u, D3v, D3w, D3x, D3y, D3z],
    4: [D4a, D4b, D4c, D4d, D4e, D4f, D4g, D4h, D4i, D4j, D4k, D4l],
    5: [D5a, D5b, D5c, D5d, D5e, D5f, D5g, D5h, D5i, D5j, D5k, D5l, D5m, D5n, D5o, D5p, D5q, D5r],
    6: [D6a, D6b, D6c, D6d, D6e, D6f, D6g, D6h, D6i, D6j, D6k, D6l, D6m, D6n, D6o, D6p, D6q, D6r, D6s],
    7: [D7a, D7b, D7c, D7d, D7e, D7f],
  };
  
  return {
    carouselImages: [...images[day], ...images[day], ...images[day]], // 3 repetitions for performance
    images: images[day],
  };
};

const events = [
  {
    id: 1,
    title: 'Day 1: Fort Santiago, Rizal Park, Manila Cathedral, Mall of Asia',
    location: 'Intramuros - Bay City, Pasay',
    date: 'April 7, 2025',
    descriptionLeft: 'Our journey began with a rich exploration of Manila’s historical landmarks, starting at Fort Santiago, where we immersed ourselves in the country’s history of resistance and heritage. We walked through the lush gardens of Rizal Park, reflecting on the life and legacy of national hero Jose Rizal. The Manila Cathedral, with its majestic architecture, provided a glimpse into the country’s colonial past and the deep-rooted Catholic influence that shaped the culture. The day offered a perfect blend of history and culture that highlighted Manila’s essence as the heart of the nation.',
    descriptionRight: 'Later, we ventured into the modern side of Manila at the Mall of Asia, one of the largest shopping centers in the world. Here, we witnessed the fusion of shopping, entertainment, and leisure in one place, complete with scenic views of Manila Bay. The modern architecture of the mall provided a stark contrast to the historical surroundings we had just explored. It was a day that blended Manila’s past and present, leaving us with a deep appreciation for both the city’s rich heritage and its vibrant modernity.',
    shortDescription: 'A historical and modern exploration of Manila.',
    ...generateImageArrays(1),
  },
  {
    id: 2,
    title: 'Day 2: Vessel Traffic Management System, SBECC',
    location: 'Subic Bay, Olongapo',
    date: 'April 8, 2025',
    descriptionLeft: 'Day 2 transported us to Subic Bay, where the Vessel Traffic Management System unveiled the precision of maritime operations. We explored how radar and communication networks orchestrate vessel movements, ensuring safety and efficiency in global trade. The coastal breeze and Subic’s lush landscapes complemented the technological marvel, sparking wonder at the silent systems powering international logistics.',
    descriptionRight: 'At the Subic Bay Exhibition and Convention Center (SBECC), we witnessed Subic’s economic vibrancy. Its modern facilities, set against verdant greenery, host international events, driving regional growth. Learning about sustainable practices, like energy-efficient designs, we marveled at the balance of industry and nature, an inspiring model of progress that deepened our appreciation for Subic’s transformative role.',
    shortDescription: 'Maritime and economic insights in Subic.',
    ...generateImageArrays(2),
  },
  {
    id: 3,
    title: 'Day 3: National Museum of Natural History and Museo ni Manuel Quezon',
    location: 'Teodoro F. Valencia Cir, Ermita, Manila - Diliman, Quezon City, Metro Manila',
    date: 'April 9, 2025',
    descriptionLeft: 'On Day 3, we returned to Manila and spent the day at the National Museum of Natural History, where we were surrounded by fascinating exhibits showcasing the Philippines’ incredible biodiversity. From colorful coral reefs to massive dinosaur fossils, the museum displayed the diverse range of plants, animals, and ecosystems found in the country. The museum’s beautiful building and interactive displays helped us understand the country’s natural world in a more personal way, making it easier to connect with the richness of its wildlife. As we walked through each exhibit, we learned not only about the variety of life in the Philippines but also about the importance of protecting these natural treasures for future generations. The experience left us in awe of the Philippines’ ecological diversity and made us realize the importance of conservation efforts to preserve this unique environment.',
    descriptionRight: 'At Museo ni Manuel Quezon, we delved into the legacy of the Philippines’ second president, exploring his contributions to nation-building through artifacts and historical narratives. The intimate setting fostered reflection on leadership and civic duty, connecting us to the country’s political past. This day blended science and history, enriching our understanding of the Philippines’ diverse heritage.',
    shortDescription: 'A journey through nature and history in Manila.',
    ...generateImageArrays(3),
  },
  {
    id: 4,
    title: 'Day 4: Bangko Sentral & HYTEC Power Inc.',
    location: 'Cruz St., Cruzville, Novaliches, Quezon City - 1104 East Ave, Quezon City',
    date: 'April 10, 2025',
    descriptionLeft: 'On Day 4, we visited Bangko Sentral ng Pilipinas, where we were given an in-depth look at the processes behind gold and money production. We first saw how gold bars are made, starting from gathering pieces of raw gold, which are then melted and carefully molded into bars. The precision required in this process ensures the gold’s purity and weight are perfect. It was fascinating to witness how raw gold is transformed into valuable bars, and it gave us a deeper understanding of the role gold plays in the economy. We also learned about the money-making process. The production of 50 and 100 peso bills involves multiple steps, including intricate designs and security features to prevent counterfeiting. We were amazed by the effort and care put into making money, and it made us realize how important it is to take good care of our bills, as the process of creating them is tiring and labor-intensive.',
    descriptionRight: 'Our visit to HYTEC Power Inc. gave us an exciting and insightful look into the company’s diverse expertise in various fields of IT and engineering. We had the unique opportunity to explore their live environment, where innovative products are designed and constructed. This hands-on experience allowed us to witness the cutting-edge processes behind the development of high-tech products and solutions that are reshaping the industry. One of the most thrilling parts of the visit was seeing how they develop and produce virtual games. We got the chance to interact with some of the games they’ve created, giving us a firsthand look at their creativity and technical skill. In addition to their impressive product offerings, HYTEC is deeply committed to education and skill development. They provide a wide range of programs and educational opportunities designed to equip students with the knowledge and experience needed for careers in the tech and engineering fields. They also organize **competitions**, offering students the chance to showcase their skills and potentially earn a spot in international events. This combination of innovation, education, and global exposure truly highlights HYTEC Power Inc.’s dedication to advancing both technology and the future workforce.',
    shortDescription: 'Exploring finance and energy innovation in Manila.',
    ...generateImageArrays(4),
  },
  {
    id: 5,
    title: 'Day 5: LIGHT RAIL TRANSIT LINE 2 & METROPOLITAN MANILA DEVELOPMENT AUTHORITY',
    location: 'Santolan, Pasig City - Ugong, Pasig, Metro Manila',
    date: 'April 11, 2025',
    descriptionLeft: 'Day 5 navigated Manila’s urban pulse with a ride on LRT2, the city’s light rail transit system. Gliding through bustling districts, we observed the efficiency of public transport, learning about its role in easing traffic and connecting communities. The experience, coupled with vibrant city views, highlighted the importance of infrastructure in Manila’s daily life.',
    descriptionRight: 'At the Metropolitan Manila Development Authority (MMDA), we explored urban planning and traffic management strategies. Discussions on flood control and public safety revealed the complexities of governing a megacity. Despite the exhaustion of early mornings, the day’s insights into Manila’s transportation and governance systems deepened our appreciation for the city’s resilience and adaptability.',
    shortDescription: 'Urban transport and governance in Manila.',
    ...generateImageArrays(5),
  },
  {
    id: 6,
    title: 'Day 6: Bell Church - Strawberry Farm - The Mansion - Mines View Park - Philippine Military Academy',
    location: 'Baguio City',
    date: 'April 12, 2025',
    descriptionLeft: 'Day 6 in Baguio began with a visit to **Bell Church**, a serene cultural landmark where we marveled at the beautiful Chinese architecture and wandered through its peaceful gardens. This church beautifully blended Filipino and Chinese traditions, offering a unique cultural experience. Afterward, we made our way to the Strawberry Farm, where we spent time picking fresh, ripe strawberries under the warm sun. The simple joy of connecting with nature and experiencing the rural way of life was a refreshing contrast to the city’s pace. Next, we visited the **Philippine Military Academy (PMA)**, where we were inspired by the disciplined cadets and the historical significance of the academy’s grounds. The academy exuded a sense of dedication and honor, deepening our appreciation for the country’s armed forces.',
    descriptionRight: 'Our afternoon journey took us to **Mines View Park**, where we were treated to breathtaking panoramic views of the Cordillera mountain range. The cool breeze and stunning landscape left us in awe, offering perfect photo opportunities and a deeper connection to Baguio’s natural beauty. From there, we visited The Mansion, Baguio’s presidential retreat, which exuded historical charm and elegance. The grand architecture and tranquil surroundings provided a glimpse into the country’s rich political history. Throughout the day, we shared laughter and created lasting memories with classmates, whether it was posing in **Igorot costumes** or exploring local crafts. This whirlwind tour of Baguio’s cultural, natural, and historical treasures left us with unforgettable memories, highlighting the city’s unique charm.',
    shortDescription: 'A cultural and scenic adventure in Baguio.',
    ...generateImageArrays(6),
  },
  {
    id: 7,
    title: 'Day 7: Baguio Public Market - Burnham Park',
    location: 'Baguio City',
    date: 'April 13, 2025',
    descriptionLeft: 'On our last day in Baguio, we went to the Baguio Public Market, where we bought pasalubong (souvenirs) because the prices were much cheaper and there was so much to choose from. The market was full of fresh produce, handmade items, and local treats, which made it a fun place to explore. Bargaining with the friendly vendors and trying strawberry taho made us feel more connected to Baguio’s lively community. The busy market, surrounded by the cool mountain air, gave us a real taste of Baguio’s culture and energy.',
    descriptionRight: 'Next, we went to Burnham Park, where we rented a bike for three people and had fun riding around the park. It was a peaceful place with beautiful gardens and a calm lake. Unfortunately, we didn’t have enough time to ride the boats on the lake because we needed to head back to our hotel and get ready for our trip back to Manila. Even though we didn’t get to do everything we wanted, it was still a great experience. This day was a perfect end to our trip, showing us both the natural beauty and the warm, friendly spirit of Baguio.',
    shortDescription: 'A vibrant and tranquil finale in Baguio.',
    ...generateImageArrays(7),
  },
];

// EventDetails Component
const EventDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const event = events.find((e) => e.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);

  const iconMap = {
    Location: <FaMapPin className="event-detail-icon" />,
    Date: <FaCalendarAlt className="event-detail-icon" />,
    Description: <FaInfoCircle className="event-detail-icon" />,
  };

  // Scroll to #day-events-section when navigating to /
  useEffect(() => {
    if (location.hash === '#day-events-section') {
      const element = document.getElementById('day-events-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  if (!event) {
    return (
      <section className="event-details">
        <div className="event-details-content">
          <h2 className="event-details-title">Event Not Found</h2>
          <p className="event-details-subtitle">Sorry, the event you're looking for doesn't exist.</p>
          <Link to="/#day-events-section" className="event-details-button">
            Back to Events
          </Link>
        </div>
      </section>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % event.carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + event.carouselImages.length) % event.carouselImages.length);
  };

  const goToImage = (index) => {
    setCurrentImage(index);
  };

  return (
    <section className="event-details">
      <div className="event-details-content">
        {/* Carousel */}
        <div className="carousel">
          <div className="carousel-images" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
            {event.carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Carousel image ${index + 1}`}
                className="carousel-image"
                onError={(e) => { e.target.src = '/fallback-image.jpg'; }}
              />
            ))}
          </div>
          <button className="carousel-button carousel-button-left" onClick={prevImage}>
            ❮
          </button>
          <button className="carousel-button carousel-button-right" onClick={nextImage}>
            ❯
          </button>
          <div className="carousel-indicators">
            {event.carouselImages.map((_, index) => (
              <span
                key={index}
                className={`carousel-indicator ${index === currentImage ? 'active' : ''}`}
                onClick={() => goToImage(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Event Header */}
        <div className="event-details-header">
          <h2 className="event-details-title">{event.title}</h2>
          <div className="event-details-meta">
            <p className="event-details-detail">
              {iconMap['Location']}
              <span className="event-details-label">Location:</span> {event.location}
            </p>
            <p className="event-details-detail">
              {iconMap['Date']}
              <span className="event-details-label">Date:</span> {event.date}
            </p>
            <p className="event-details-short-description">
              {iconMap['Description']}
              {event.shortDescription}
            </p>
          </div>
        </div>

        {/* Event Body with Magazine Style */}
        <div className="event-details-body">
          <div className="event-details-image-overlay">
            <img src={event.images[0]} alt="Before paragraph 1" className="event-details-image-before" onError={(e) => { e.target.src = '/fallback-image.jpg'; }} />
            <p className="event-details-description-overlay">{event.descriptionLeft}</p>
          </div>
          <img src={event.images[1]} alt="After paragraph 1" className="event-details-image-after" onError={(e) => { e.target.src = '/fallback-image.jpg'; }} />
          <div className="event-details-image-overlay">
            <p className="event-details-description-overlay">{event.descriptionRight}</p>
            <img src={event.images[2]} alt="Before paragraph 2" className="event-details-image-before" onError={(e) => { e.target.src = '/fallback-image.jpg'; }} />
          </div>
        </div>

        {/* Back to Events Button */}
        <Link to="/#day-events-section" className="event-details-button">
          Back to Events
        </Link>
      </div>
    </section>
  );
};

export default EventDetails;