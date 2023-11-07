import '../Styles/Categories.css'

import salads from '../Assets/salads.png'
import mashawi from '../Assets/mashawi.png'
import mou3ajanat from '../Assets/mou3ajanat.png'
import shawarma from '../Assets/shawarma.png'
import maincourses from '../Assets/maincourses.png'
import Category from '../Components/Category.js'
import { useState } from 'react'
const Categories = () => {

  const data = [
    {
      "id":123,
      "name":"Mashawi",
      "img":"mashawi.png"
    },
    {
      "id":53,
      "name":"Fararij",
      "img":"mashawi.png"
    },
    {
      "id":18653,
      "name":"Salads",
      "img":"mashawi.png"
    },
    {
      "id":1463,
      "name":"Mu3ajanat",
      "img":"../Assets/mou3ajanat.png"
    }
    ,
    {
      "id":18653,
      "name":"Salads",
      "img":"mashawi.png"
    },
    {
      "id":1463,
      "name":"Mu3ajanat",
      "img":"mashawi.png"
    }
    
  ]
    return (
        <div className='MOTHER'>
          <h1 className='Categories-title'>Our <span>Categories</span></h1>
           <div className="flex-container">
           
              {data.map((category) => (
                console.log(category.img),
                <Category name={category.name} img={category.img}/>
              ))}
              
            </div>
        </div>
       
    )
}

export default Categories;