import React, {useState} from 'react';
import axios from 'axios';
import Zalame2 from '../Assets/Zalame2.jpg';
import Location from '../Assets/Pasted-image.png';
import BATATA from '../Assets/Zalame.jpg';
import '../Styles/Contact.css'
import Button from '../Components/MainButton'

export default function ContactUs() {


const [firstName, setFirstName] = useState('');

var submit = async (e)=>{
  e.preventDefault()

try{
await axios.post("")

}

catch{


}

}


  return (
    <>
      <div className="Main">
      <h1 className="location-title">
            Our Physical   <span  className='contact-us-span'>                                                                                                                                                                                                               Address</span>
            </h1>
        <div className="location">
        
          <a href="https://www.google.com/maps/place/Abadai+Beirut+Resturant/@24.4925426,54.3777946,15z/data=!4m6!3m5!1s0x3e5e6701d56fd4b3:0x9dfa23e267d178e4!8m2!3d24.4925426!4d54.3777946!16s%2Fg%2F11jyz1b4ns?entry=ttu">
            <img className="location-image" src= {Location} alt="location" />
          </a>
          
          <div className="location-info">
            
            <p className="location-desc">
              Al Mawkib St - Al Zahiyah - E16 -<br />
              Abu Dhabi - United Arab Emirates
            </p>
          </div>
        </div>
        <h1 className="contact-us-title">
        Get in Contact  
        <span className='contact-us-span'> with Us </span>
            </h1>
        <div className="contact-us">
       
          <img className="contact-us-image" src={Zalame2} alt="Contact Us" />

          <form className="contact-us-form" action='POST'>
            

            <label className="contact-us-firstName" htmlFor="firstName" onChange = {(e) => {setFirstName(e.target.value)}}>
              First Name:
            </label>
            <input
              className="contact-us-input"
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />

            <label className="contact-us-secondName" htmlFor="secondName">
              Last Name:
            </label>
            <input
              className="contact-us-input"
              type="text"
              name="secondName"
              placeholder="Last Name"
              required
            />

            <label className="contact-us-email" htmlFor="email">
              Email:
            </label>
            <input
              className="contact-us-input"
              type="email"
              name="email"
              placeholder="Enter E-mail"
              required
            />

            <label className="contact-us-message-label" htmlFor="message">
              Message:
            </label>
            <textarea
              className="contact-us-message"
              name="message"
              rows="4"
              placeholder="Enter a message"
              required
            ></textarea>
          <Button>Submit</Button>
            {/* <input type="submit" value="Submit" onClick={submit} /> */}
          </form>
        </div>
      </div>
    </>
  );
}
