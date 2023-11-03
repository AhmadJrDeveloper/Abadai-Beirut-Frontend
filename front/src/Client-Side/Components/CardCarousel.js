import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Cards.js';
import '../Styles/carousel.css';
import {useState} from 'react';

const Carousell = ()=>{

    
    const listOfCards = [<Card/>, <Card/>, <Card/>, <Card/>];
    var card = ''
   

    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <Carousel className='div' responsive={responsive}>
            {card = listOfCards.map((card)=>((card)))}
        
      </Carousel>
      )
}

export default Carousell