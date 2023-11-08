import React, { useState, useEffect } from 'react';
import axios from 'axios';
  import '../Styles/AddPro.css'
function AddPro() {

  const [existingCategoryNames, setExistingCategoryNames] = useState([]);



  useEffect(() => {
    // Fetching the data
    axios.get('http://localhost:4000/api/categories/')
      .then((response) => {
        const categoryNames = response.data.map((category) => category.name);
        console.log('Fetched existing category names:', categoryNames);
        setExistingCategoryNames(categoryNames);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
           
    <form className='add-pro-form'>
    {/* <div className='logo'><img src={Logo}/></div> */}
    <div className='add-input-form-container-pro'>
        <h3 className='addProTitle'>Add a Product Here</h3>

        

        <label for="Product-name">Product Name</label>
        <input type="text" placeholder="Hummus" id="Product-name"/>


        <label for="Product-description">Product Description</label>
        <textarea id="Product-description" placeholder="Hummus"> </textarea> 

        <label for="Product-price">Product Price</label>
        <input type='number' placeholder='2$' id='Product-price'/>

        <label for="Category-image">Category Image</label>
        <input type="file" id="Category-image"/>

        <select id='CategoryDropDown'>
          {existingCategoryNames.map((category) => (
            <option key={category._id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <button className="add-pro-btn" type='submit'>add</button>
   
       </div>
    </form>
</>
  )
}

export default AddPro
