
// components
import HomeHistory from "../Components/HomeHistory.js"
import Header from "../Components/Header.js"
import Footer from "../Components/Footer.js"
import Carousell from "../Components/CardCarousel.js"
import Banner from "../Components/Banner.js"

const Home = () => {
  
  
  
    return (
        <div className="home">
         
            <Banner/>
            <HomeHistory/>
             <Carousell/>
             <Footer/>
        </div>
    )
}



export default Home