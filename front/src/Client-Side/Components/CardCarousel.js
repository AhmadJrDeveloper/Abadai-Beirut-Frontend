import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Cards.js';
import '../Styles/carousel.css';
import { useState } from 'react';

const Carousell = () => {
  const listOfCards = [
    { id: 1, title: 'Card 1' },
    { id: 2, title: 'Card 2' },
    { id: 3, title: 'Card 3' },
    { id: 4, title: 'Card 4' },
    { id: 5, title: 'Card 5' },
    { id: 6, title: 'Card 6' },
    { id: 7, title: 'Card 7' },
    { id: 8, title: 'Card 8' },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
  
            <>
              <span className="Home-Cart-Title">Our <span className='Home-Special'> Bestsellers</span></span>
            <Carousel className='div' responsive={responsive}>

              {listOfCards.map((card) => (
                <Card key={card.id} title={card.title} className='card'/>
              ))}
            </Carousel>

            </>

            
            
 

       
            
           



  );
}

export default Carousell;
