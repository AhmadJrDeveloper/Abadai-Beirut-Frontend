import React from 'react'
import Category from '../Components/Category'
import Button from '../../Client-Side/Components/MainButton'
import HeaderAdmin from '../Components/HeaderAdmin'
import '../Styles/Categories.css';
function CategoriesAdmin() {
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
    <>
   
    <div className='admin-MOTHER'>
    <HeaderAdmin>Categories</HeaderAdmin>
      <Button>Add Category</Button>
      <div className='categories-container-admin'>
        
      {data.map((category) => (
                console.log(category.img),
                <Category name={category.name} img={category.img}/>
              ))}
      
    </div>
    </div>
    </>
  )
}

export default CategoriesAdmin
