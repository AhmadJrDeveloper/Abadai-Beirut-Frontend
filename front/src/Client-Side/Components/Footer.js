import '../Styles/Footer.css'
import Logo from '../Assets/LOGO.png'
import phonelogo from '../Assets/phonelogo.png'
import iglogo from '../Assets/iglogo.png'

const Footer =() => {
    return (
        <div className='Footer'>
          <img className='footerlogo' alt='alt: LOGO' src={Logo}/> 
            <div className='moretoexplore'>
                <h4>More To Explore</h4>
                <ul className='ulfooter'>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="About">About Us</a></li>
                    <li><a href="Contact">Contact Us</a></li>
                    <li><a href="Menu">Menu</a></li>
                </ul>
            </div>
            <div className='contactinfo'>
                <h4>Contact Info</h4>
                <div className='ulfooter1'>
                <a href="https://wa.me/message/6OCI2AOKZB47D1?src=qr" target="_blank"><img className='phonelogo' alt='alt: PHONE LOGO' src={phonelogo}/></a>
                <a href="https://wa.me/message/6OCI2AOKZB47D1?src=qr" target="_blank"><p>+971 58 546 2004</p></a>
                </div>
                <div className='ulfooter1'>
                    <a href="https://www.instagram.com/abadaibeirut/" target="_blank"><img className='iglogo' alt='alt: INSTAGRAM LOGO' src={iglogo}/></a>
                    <a href="https://www.instagram.com/abadaibeirut/" target="_blank"><p>abadaibeirut</p></a>
                </div>
            </div>
        </div>
    )
}

export default Footer