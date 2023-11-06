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
          <p className="About-us-Header"><span>The History</span> Of Our Restaurant</p>
          <p className="About-us-SubHeader">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eaque alias harum eos eius mollitia. Quod voluptas, at sequi necessitatibus, qui tenetur officiis dolore, facere commodi ea fuga est debitis.</p>
          <p className="About-us-SubHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque natus, fugiat cumque iusto eum nobis aut voluptatem, at culpa et in exercitationem accusantium libero facere ex voluptatum deleniti iure fuga.</p>
        </div>
      </div>

      <div className="About-us-Below">
        <div className="About-us-Below-Info">
          <img className="About-us-Below-img-First" src={Zalame2} alt="zzz" />
          <p className="About-us-Below-SubHeader">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum impedit delectus provident perferendis iusto ipsam, inventore repellat obcaecati fuga culpa, eligendi minima, consequuntur ex corrupti vel dignissimos quos nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nemo provident porro explicabo suscipit dolore quam id rem dignissimos magnam vero fugit facere incidunt, voluptates a eligendi cum repudiandae labore?</p>
        </div>
        <img className="About-us-Below-img-Second" src={Zalame2} alt="zzz" />
      </div>
    </div>
  );
}
