import '../Styles/bestsellers.css'
import Cart from './Carts'
import Previous from '../Assets/Previous.png'
import Next from '../Assets/next.png'
// imports for carousel
import { useState } from 'react';

const Recommended = ()=>{


    return(
        <div className="Home-recommended">
            <span className="Home-Cart-Title">Our <span className='Home-Special'> Bestsellers</span></span>
            <div className="Home-All-Carts">
            
            <img className='Home-Previous' src={Previous}/>
            <Cart/>
            <Cart/>
            <Cart/>



                
                <img className='Home-Next' src={Next}/>
              
                
             
            </div>
           

        </div>
            
    )
}
export default Recommended