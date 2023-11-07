import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Cards'
import React from 'react'
import '../Styles/carousel.css';
import Button from '../Components/MainButton'
const ItemCarousel = ()=> {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  

  return (  
      
        
        <Carousel
  
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          
        >
          <Card><h3>25$</h3></Card>
          <Card><h3>25$</h3></Card>
          <Card><h3>25$</h3></Card>
          <Card><h3>25$</h3></Card>
      

        </Carousel>

 
  )
}

export default ItemCarousel