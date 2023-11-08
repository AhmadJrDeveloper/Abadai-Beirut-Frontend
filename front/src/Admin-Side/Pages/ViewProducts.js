import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  
  async function fetchCategories() {
    try {
      const response = await axios.get('http://localhost:4000/api/products/');
      return response.data;
    } catch (error) {
      console.error('Error fetching category data:', error);
      return [];
    }
  }


  const [existingProductData, setExistingProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const categories = await fetchCategories();
      setExistingProductData(categories);
    }

    fetchData();
  },[existingProductData]);
    
  
  return (
    <div className='admin-MOTHER-products'>
      <HeaderAdmin>Products</HeaderAdmin>
      <Link to="/add-product">
        <Button className="add-product-button-admin">Add Product</Button>
      </Link>
          <div className='products-container-admin'>

      {existingProductData.map((product) => (
                console.log(product.image),
                console.log(product.name),
                <Card name={product.name} description = {product.description} price = {product.price}
                image={`http://localhost:4000/${product.image.split("public")[1]}`} productId={product._id}      />        ))}
      
      </div>
    </div>
  )
}

export default ViewProducts
