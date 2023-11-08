import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen  } from '@fortawesome/free-solid-svg-icons'
import { MdDelete } from "react-icons/md";
import {FaStar} from "react-icons/fa";
import Appertizers from '../../Client-Side/Assets/appetizers.png'
import '../Styles/SinglePro.css'
const Product= (prop) =>{
  return (
    <div className='admin-products-component-with-icons'>
        {/* <div className='admin-icon-for-products-favorite'>
            <FaStar/>
        </div> */}
        <div className='admin-icon-for-products-all'>
            <div className='admin-icon-for-products-favorite'>
                <FaStar className='admin-icon-for-products-favorite-star'/>
            </div>

            <div className='admin-icon-for-products'>
        
                 <FontAwesomeIcon icon={faPen} className='products-icon-edit-admin'/>
                 <MdDelete className='products-icon-delete-admin'/>
        
             </div>
        </div>
        
        <div className="admin-product-Cart">
            <img src={prop.image}/>
            <p className="Home-Product-Name">{prop.name}</p>
            <p className="Home-Product-Description">
                {prop.description}
            </p>
            <span>Price: {prop.price} $</span>

        </div>
    </div>

 
  )
}

export default Product
