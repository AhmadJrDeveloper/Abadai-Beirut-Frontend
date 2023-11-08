import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MdDelete } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import '../Styles/SinglePro.css';

const Product = (props) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const handleConfirmDelete = async () => {
    try {
      // Use the productId prop in the DELETE request URL
      const response = await axios.delete(`http://localhost:4000/api/products/${props.productId}`);

      if (response.status === 200) {
        // Product successfully deleted
        console.log('Product deleted');

        // After successful deletion, you can update the UI to remove the deleted product
        setConfirmDelete(false);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="admin-products-component-with-icons">
      <div className="admin-icon-for-products-all">
        <div className="admin-icon-for-products-favorite">
          <FaStar className="admin-icon-for-products-favorite-star" />
        </div>
        <div className="admin-icon-for-products">
          <FontAwesomeIcon icon={faPen} className="products-icon-edit-admin" />
          <MdDelete className="products-icon-delete-admin" onClick={handleDeleteClick} />
        </div>
      </div>

      <div className="admin-product-Cart">
        <img src={props.image} alt={props.name} />
        <p className="Home-Product-Name">{props.name}</p>
        <p className="Home-Product-Description">{props.description}</p>
        <span>Price: {props.price} $</span>

        {confirmDelete && (
          <div className="delete-confirm-dialog">
            <p>Are you sure you want to delete this product?</p>
            <button onClick={handleCancelDelete}>Cancel</button>
            <button onClick={handleConfirmDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
