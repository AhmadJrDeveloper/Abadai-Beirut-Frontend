import '../Styles/Header.css'
import Logo from '../Assets/LOGO.png'
import phonelogo from '../Assets/phonelogo.png'
// import header from '../Assets/headerimage1.jpg'


const Header = () => {
    return (
        <div className="header">
         
            <ul className='ulheader'>
                <li className='home-button-header'><a href="#home.js">Home</a></li>
                <li className='Menu-button-header'><a href="Menu.js">Menu</a></li>
                <li className='About-button-header'><a href="About.js">About us</a></li>
                <li className='contact-button-header'><a href="Contact.js">Contact us</a></li>
            </ul>

            <img className='headerlogo' src={Logo}/>
            <div className='phonenumber'>
            <img className='phonelogo' src={phonelogo}/>
            <p>+961 71248327</p>
            </div>
        
            
        </div>
    )
}

export default Header