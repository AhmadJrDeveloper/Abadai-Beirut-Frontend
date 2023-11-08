import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen  } from '@fortawesome/free-solid-svg-icons'
import { MdDelete } from "react-icons/md";
import Appertizers from '../../Client-Side/Assets/appetizers.png'
import '../Styles/SingleCat.css'
const Category=(prop) => {
  return (
    <div className='admin-category-component-with-icons'>
        <div className='admin-icon-for-category'>
      <FontAwesomeIcon icon={faPen} className='categories-icon-edit-admin'/>
        <MdDelete className='categories-icon-delete-admin'/>
        </div>
        <div class="flex-item">
        <img className='categoryimage' alt='alt: appetizers image' src={Appertizers}/>
        <p>{prop.name}</p>
    </div>

    </div>
  )
}

export default Category
