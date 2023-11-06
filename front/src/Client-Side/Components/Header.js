import '../Styles/Header.css'
import Logo from '../Assets/LOGO.png'
import phonelogo from '../Assets/phonelogo.png'

import { useState } from 'react'
const Header = () => {
    const [collapse, setCollapsed] = useState(true)
    return (
        <header>
            <nav className="Home-container">
            
            <ul className='ulheader'>
                <li className='home-button-header'><a href="#Home">Home</a></li>
                <li className='Menu-button-header'><a href="Menu">Menu</a></li>
                <li className='About-button-header'><a href="About">About us</a></li>
                <li className='contact-button-header'><a href="Contact">Contact us</a></li>
            </ul>
            <img className='headerlogo' alt='alt: LOGO' src={Logo}/>

           

            <div className='phonenumber'>
            <a href="https://wa.me/message/6OCI2AOKZB47D1?src=qr" target="_blank"><img className='phonelogo' alt='alt: PHONE LOGO' src={phonelogo}/></a>
            <p><a href="https://wa.me/message/6OCI2AOKZB47D1?src=qr" target="_blank">+971 58 546 2004</a></p>
            </div>

            </nav>

            
            {/* <nav className='header_nav_mobile'>
            {!collapse ?
            <ul className='header_ul_mobile'>
   
          
             <li className='home-button-header'><a href="#Home">Home</a></li>
                <li className='Menu-button-header'><a href="Menu">Menu</a></li>
                <li className='About-button-header'><a href="About">About us</a></li>
                <li className='contact-button-header'><a href="Contact">Contact us</a></li>
      
             </ul>:null}
            </nav> */}
       
            
        </header>
    )
}

export default Header