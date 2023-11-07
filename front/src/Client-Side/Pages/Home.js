

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

            <Header/>
            {/* <HomeHistory/> */}

           <Carousel/>
             <Footer/>   

        </div>
    )
}




export default Home