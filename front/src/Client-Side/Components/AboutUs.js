import React from 'react';
import BATATA from '../Assets/Zalame.jpg';
import Zalame2 from '../Assets/Zalame2.jpg';
import '../Styles/About.css';

export default function AboutUs() {
  return (
    <div className="About-us">
      <div className="About-us-Above">
        <div className="About-us-Above-img">
          <div className="About-us-Above-img-First-row">
            <img src= {BATATA} alt="" />
            <img src={BATATA} alt="" />
          </div>
          <img className="About-us-Above-img-Second-row" src={BATATA} alt="" />
        </div>
        <div className="About-us-Above-Info">
          <p className="About-us-Header"><span className='AboutUs-Title'>The History</span> Of Our Restaurant</p>
          <p className="About-us-SubHeader">Our story begins with a passion for sharing the authentic tastes and traditions of Lebanon with the world. Established in 1969, our restaurant has been a labor of love, driven by a commitment to preserving the timeless recipes and cultural heritage of this remarkable Mediterranean country.</p>
          <p className="About-us-SubHeader">  Over the years, we've strived to create an inviting and warm atmosphere that mirrors the genuine Lebanese dining experience. From traditional dishes like hummus, falafel, and shawarma, to our signature mezze platters and mouthwatering kebabs... </p>
        </div>
      </div>

      <div className="About-us-Below">
        <div className="About-us-Below-Info">
          <img className="About-us-Below-img-First" src={Zalame2} alt="zzz" />
          <p className="About-us-Below-SubHeader">Every bite at <b>Abadai Beirut</b> is a homage to the centuries-old culinary artistry of Lebanon. We invite you to join us on this culinary adventure, where every meal is a celebration of the flavors and traditions that make Lebanon's cuisine a global sensation.</p>
        </div>
        <img className="About-us-Below-img-Second" src={Zalame2} alt="zzz" />
      </div>
    </div>
  );
}
