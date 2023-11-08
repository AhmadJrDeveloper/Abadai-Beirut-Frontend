import React from 'react'
import Card from '../Components/Product'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen  } from '@fortawesome/free-solid-svg-icons'
import { MdDelete } from "react-icons/md";
import Appertizers from '../../Client-Side/Assets/appetizers.png'
import Button from '../../Client-Side/Components/MainButton'
import HeaderAdmin from '../Components/HeaderAdmin';
import '../Styles/Products.css'
function ViewProducts() {
  const data = [
    {
      "id":123,
      "name":"Mashawi",
      "image":"../../Client-Side/Assets/appetizers.png",
      "description":"yummyy",
      "price":25,

    },
     {
      "id":123,
      "name":"Mashawi",
      "image":"../../Client-Side/Assets/appetizers.png",
      "description":"yummyy",
      "price":25,
      
    },
    
    {
      "id":123,
      "name":"Mashawi",
      "image":"../../Client-Side/Assets/appetizers.png",
      "description":"yummyy",
      "price":25,
      
    },
    
    
    {
      "id":123,
      "name":"Mashawi",
      "image":"../../Client-Side/Assets/appetizers.png",
      "description":"yummyy",
      "price":25,
      
    },
    
    {
      "id":123,
      "name":"Mashawi",
      "image":"../../Client-Side/Assets/appetizers.png",
      "description":"yummyy",
      "price":25,
      
    },
    {
      "id":123,
      "name":"Mashawi",
      "image":"../../Client-Side/Assets/appetizers.png",
      "description":"yummyy",
      "price":25,
      
    },
    
    
  ]
  return (
    <div className='admin-MOTHER-products'>
      <HeaderAdmin>Products</HeaderAdmin>
      <Link to="/add-product">
        <Button className="add-product-button-admin">Add Product</Button>
      </Link>
          <div className='products-container-admin'>

      {data.map((product) => (
                console.log(product.image),
                console.log(product.name),
                <Card name={product.name} description = {product.description} price = {product.price}  image={Appertizers}/>
              ))}
      
      </div>
    </div>
  )
}

export default ViewProducts
