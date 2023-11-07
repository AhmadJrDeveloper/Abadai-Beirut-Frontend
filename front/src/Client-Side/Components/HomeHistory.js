import React from 'react'
import ZALAME from '../Assets/Zalame.jpg';
import Button from './MainButton'
import '../Styles/HomeHistory.css'
export default function HomeHistory() {
  return (
    <div className='Home-History'>
        <img id = 'Home-History-Image' src={ZALAME} alt="Home_History" />
        <div className='Info'>
            
            <p className="Home-History-Header"><span className='Home-History-Span'> The History</span> Of Our Restaurant</p>
     

            <p className="Home-History-SubHeader">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic sint sed, debitis quod minus inventore optio! Assumenda quae architecto nam sunt, dicta, earum accusamus,
             rem atque ea quam magnam ipsam?</p>

            <Button />  
        </div>
    </div>
  )
}

 