import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { MdDelete } from "react-icons/md";
import '../Styles/SingleCat.css';
import axios from 'axios';
import { Link } from "react-router-dom";


const Category = (props) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDeleteClick = () => {
    setConfirmDelete(true);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
  };

  const handleConfirmDelete = async () => {
    try {
      // Use the categoryId prop in the DELETE request URL
      const response = await axios.delete(`http://localhost:4000/api/categories/${props.categoryId}`);
      
      if (response.status === 200) {
        // Category successfully deleted
        console.log('Category deleted');
        
        // After successful deletion, you can update the UI to remove the deleted category
        setConfirmDelete(false);
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };
  
  

  return (
    <div className='admin-category-component-with-icons'>
      <div className='admin-icon-for-category'>
        <Link to = "/edit-category">
        <FontAwesomeIcon icon={faPen} className='categories-icon-edit-admin' />
        </Link>
        <MdDelete
          className='categories-icon-delete-admin'
          onClick={handleDeleteClick}
        />
      </div>
      <div className="flex-item">
        <img className='categoryimage' alt='alt: appetizers image' src={props.image} />
        <p>{props.name}</p>
      </div>
      {confirmDelete && (
        <div className='delete-confirm-dialog'>
          <p>Are you sure you want to delete this category?</p>
          <button onClick={handleCancelDelete}>Cancel</button>
          <button onClick={handleConfirmDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Category;
