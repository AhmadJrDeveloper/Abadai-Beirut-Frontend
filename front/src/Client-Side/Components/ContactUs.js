import React from 'react';
import Zalame2 from '../Assets/Zalame2.jpg';
import Location from '../Assets/Location.jpg';
import '../Styles/Contact.css'


export default function ContactUs() {
  return (
    <>
      <div className="Main">
        <div className="location">
          <a href="https://www.google.com/maps/place/Abadai+Beirut+Resturant/@24.4925426,54.3777946,15z/data=!4m6!3m5!1s0x3e5e6701d56fd4b3:0x9dfa23e267d178e4!8m2!3d24.4925426!4d54.3777946!16s%2Fg%2F11jyz1b4ns?entry=ttu">
            <img className="location-image" src= {Location} alt="location" />
          </a>
          <div className="location-info">
            <p className="location-title">
              Our <span>Location</span>
            </p>
            <p className="location-desc">
              Al Mawkib St - Al Zahiyah - E16 -<br />
              Abu Dhabi - United Arab Emirates
            </p>
          </div>
        </div>

        <div className="contact-us">
          <img className="contact-us-image" src={Zalame2} alt="Contact Us" />

          <form className="contact-us-form">
            <p className="contact-us-title">
              <span>Contact </span>us
            </p>

            <label className="contact-us-firstName" htmlFor="firstName">
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

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}
