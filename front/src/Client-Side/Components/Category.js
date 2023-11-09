import React from 'react'
import appetizers from '../Assets/appetizers.png'
import '../Styles/Category.css'
function Category(prop) {
  return (
  
    <div class="flex-item">
        <img className='categoryimage' alt='alt: appetizers image' src={prop.image}/>
        <p>{prop.name}</p>
    </div>
  )
}

export default Category