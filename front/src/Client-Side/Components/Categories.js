import '../Styles/Categories.css'
import Category from '../Components/Category.js'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Categories = () => {

  const [existingCategoryData, setExistingCategoryData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/categories/')
      .then((response) => {
        console.log('Fetched existing category data:', response.data);
        setExistingCategoryData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  


  return (
    <div className='MOTHER'>
      <h1 className='Categories-title'>Our <span>Categories</span></h1>
      <div className="flex-container">
        {existingCategoryData.map((category) => (
          <Category key={category._id} name={category.name} image = {`http://localhost:4000/${category.image.split("public")[1]}`} />
        ))}
      </div>
    </div>
  );
  }
            

export default Categories;