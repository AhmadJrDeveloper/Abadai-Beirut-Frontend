import '../Styles/bestsellers.css'
import Cart from './Carts'

// imports for carousel
import { useState } from 'react';

const Recommended = ()=>{


    return(
        <div className="Home-recommended">
            <span className="Home-Cart-Title">Our <span className='Home-Special'> Bestsellers</span></span>
            <div className="Home-All-Carts">
         
            <Cart/>
            <Cart/>
            <Cart/>

                
            </div>
           

        </div>
            
    )
}
export default Recommended