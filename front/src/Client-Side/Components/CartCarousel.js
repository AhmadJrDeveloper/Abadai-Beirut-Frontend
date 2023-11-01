import React, { useState, useRef } from 'react';
import '../Styles/bestsellers.css'; // Import your CSS file

const CardCarousel = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const cardContainerRef = useRef(null);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    scrollCardContainer();
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    scrollCardContainer();
  };

  const scrollCardContainer = () => {
    const cardWidth = cardContainerRef.current.offsetWidth / 3; // Width of each card (divided by 3 because we show three cards at a time)
    cardContainerRef.current.scrollLeft =
      currentCardIndex * cardWidth;
  };

  return (
    <div className="card-carousel">
      <button className="nav-button prev" onClick={prevCard}>
        Previous
      </button>
      <div className="card-container" ref={cardContainerRef}>
        {cards.map((CardComponent, index) => (
          <div
            key={index}
            className={`card ${index === currentCardIndex ? 'active' : ''}`}
          >
            <CardComponent />
          </div>
        ))}
      </div>
      <button className="nav-button next" onClick={nextCard}>
        Next
      </button>
    </div>
  );
};

export default CardCarousel;
