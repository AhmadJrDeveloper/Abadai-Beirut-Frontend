import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/AddCat.css';


function AddCat(prop) {
  const [name, setCategoryName] = useState('');
  const [image, setCategoryImage] = useState(null);
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
  
  

  const addCategory = async (e) => {
    e.preventDefault();


    if (existingCategoryNames.includes(name)) {
      alert('Category with this name already exists. Please choose a different name.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', image);

      await axios.post('http://localhost:4000/api/categories/', formData);

      setCategoryName('');
      setCategoryImage(null);

      // Reset the file input by creating a new key
      const inputElement = document.getElementById('Category-image');
      inputElement.value = ''; // This clears the selected file
      inputElement.key = Date.now();
    } catch (e) {
      console.log(e);
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setCategoryImage(e.target.files[0]);
    }
  }

  return (
    <>
      <form className="add-cat-form" onSubmit={addCategory}>
        <div className="add-input-form-container">
          <h3>Add a Category Here</h3>

          <label htmlFor="Category-name">Category Name</label>
          <input
            type="text"
            placeholder="Appetizers"
            id="Category-name"
            value={name}
            required
            onChange={(e) => { setCategoryName(e.target.value) }}
          />

          <label htmlFor="Category-image">Category Image</label>
          <input
            type="file"
            id="Category-image"
            required
            onChange={handleImageChange}
          />
          <button className="add-cat-btn" type="submit">Add</button>
        </div>
      </form>
    </>
  );
}

export default AddCat;
