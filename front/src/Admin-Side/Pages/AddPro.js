import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/AddPro.css';

function AddPro() {
  const [existingCategoryNames, setExistingCategoryNames] = useState([]);
  const [existingProductNames, setExistingProductNames] = useState([]);
  const [name, setProductName] = useState('');
  const [description, setProductDescription] = useState('');
  const [price, setProductPrice] = useState(0);
  const [image, setProductImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(''); // State to store selected category ID
  const [categoryId, setCategoryId] = useState(''); // State to store the corresponding categoryId

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/api/products/');
        const products = response.data;
        console.log('Fetched existing products:', products);
        setExistingProductNames(products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:4000/api/categories/');
        const categories = response.data;
        console.log('Fetched existing categories:', categories);
        setExistingCategoryNames(categories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  // Set the category ID when a category is selected
  useEffect(() => {
    setCategoryId(selectedCategory);
  }, [selectedCategory]);

  const addProduct = async (e) => {
    e.preventDefault();

    if (existingProductNames.some((product) => product.name === name)) {
      alert('Product with this name already exists. Please choose a different name.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('image', image);
      formData.append('categoryId', categoryId);

      // Replace 'http://localhost:4000/api/products/' with the correct endpoint for adding a product
      const response = await axios.post('http://localhost:4000/api/products/', formData);

      if (response.status === 200) {
        setProductName('');
        setProductDescription('');
        setProductPrice(0);
        setProductImage(null);
        setSelectedCategory('');

        const inputElement = document.getElementById('Product-image');
        inputElement.value = ''; // This clears the selected file
        inputElement.key = Date.now();
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      setProductImage(e.target.files[0]);
    }
  }

  return (
    <>
      <form className="add-pro-form" onSubmit={addProduct}>
        <div className="add-input-form-container-pro">
          <h3 className="addProTitle">Add a Product Here</h3>

          <label htmlFor="Product-name">Product Name</label>
          <input
            type="text"
            id="Product-name"
            placeholder="Hummus"
            value={name}
            onChange={(e) => setProductName(e.target.value)}
            required // Make it required
          />

          <label htmlFor="Product-description">Product Description</label>
          <textarea
            id="Product-description"
            placeholder="Hummus"
            value={description}
            onChange={(e) => setProductDescription(e.target.value)}
            required // Make it required
          ></textarea>

          <label htmlFor="Product-price">Product Price</label>
          <input
            type="number"
            id="Product-price"
            placeholder="2$"
            value={price}
            onChange={(e) => setProductPrice(e.target.value)}
            required // Make it required
          />

          <label htmlFor="Product-image">Product Image</label>
          <input
            type="file"
            id="Product-image"
            required
            onChange={handleImageChange}
          />

          <label htmlFor="CategoryDropDown">Select a Category</label>
          <select
            id="CategoryDropDown"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required // Make it required
          >
            <option value="">Select a category</option>
            {existingCategoryNames.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>

          <button className="add-pro-btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default AddPro;
