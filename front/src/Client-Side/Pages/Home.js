// Styles
import '../Styles/Home.css';
// components

import Header from "../Components/Header.js"
import HomeHistory from "../Components/HomeHistory.js"
import Carousel from '../Components/CardCarousel.js'
import Footer from "../Components/Footer.js"
import Banner from '../Components/Banner.js'
import Categories from '../Components/Categories.js'
const Home = () => {
  
  
  
    return (
        <div className="home">

            <HomeHistory/>
            <div className='Home-Carousel-Header-Container'>
            <p className="Home-Carousel-Header"><span className='Home-Carousel-Span'> Our</span> Bestsellers</p>
            </div>

            <Carousel/>
      

        </div>
    )
}




export default Home