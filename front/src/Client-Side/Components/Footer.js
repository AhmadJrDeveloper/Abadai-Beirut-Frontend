import '../Styles/Footer.css'
import Logo from '../Assets/LOGO.png'
import phonelogo from '../Assets/phonelogo.png'
import iglogo from '../Assets/iglogo.png'

const Footer =() => {
    return (
        <div className='Footer'>
          <img className='footerlogo' src={Logo}/> 
            <div className='moretoexplore'>
                <h4>More To Explore</h4>
                <ul className='ulfooter'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Menu</li>
                </ul>
            </div>
            <div className='contactinfo'>
                <h4>Contact Info</h4>
                <div className='ulfooter1'>
                    <img className='phonelogo' src={phonelogo}/>
                    <p>+961 71248327</p>
                </div>
                <div className='ulfooter1'>
                    <img className='iglogo' src={iglogo}/>
                    <p>abadaibeirut</p>
                </div>
            </div>
        </div>
    )
}

export default Footer