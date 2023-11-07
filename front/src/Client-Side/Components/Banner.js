import banner from '../Assets/banner.png'
import '../Styles/banner.css'
import banner1 from '../Assets/burak.jpg'


const Banner = () => {
  return (
    <div>
      <img alt='banner' className="banner" src={banner1}/>
      <div className='banner-description1'><p className='banner-description'>Lebanese Delights: Taste the Flavors of Lebanon</p></div>
    </div>
  )
}

export default Banner

